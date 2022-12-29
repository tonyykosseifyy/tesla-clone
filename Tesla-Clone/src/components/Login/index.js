import React from "react";
import LanguageIcon from '@mui/icons-material/Language';

import { Wrapper,Content } from "./login.style";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

import { signInWithPopup } from "firebase/auth"
import { provider, auth } from "../firebase";


const Login = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const signIn = () => {
        
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            dispatch(
                login({
                    email: user?.email,
                    uid: user?.uid,
                    displayName: user?.displayName,
                })
            )
            navigate('/teslaaccount')
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode + errorMessage)
        });
    }
    
    

    document.title = 'Tesla SSO - Sign In'
    return(
        <>
        <Wrapper>
            <div className="header" >
                <div>
                    <Link to='/'>
                        <img src="/images/logo.svg" alt="logo"/>
                    </Link>
                </div>
                <div className="lang" >
                    <LanguageIcon/> <span>en-US</span>
                </div>
            </div>

            <Content>
                <h1>Sign In</h1>
                <button onClick={(e) => signIn()}>Sign in With Google</button>
            </Content>
        </Wrapper>
        </>
    )
}

export default Login;