import React from "react";

import { Wrapper } from "./modely.style";

import Section from "../Section";
import Interior from "../Interior_Specs";
import Specs from "../Gen_Spec";
import Header from "../Header";

const ModelY = () =>{

    document.title = "Model Y | Tesla";
    return(
        <Wrapper>
            <Header/>
            <Section 
                title="Model Y" 
                backgroundImg="model_y_1.jpeg" 
                arrow="true" 
                range='330'
                speed='3.5'
                top='155'
            />
            <Interior/>
            <Specs/>
        </Wrapper>
    )
}

export default ModelY;