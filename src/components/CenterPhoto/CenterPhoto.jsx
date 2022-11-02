import React from 'react'
import { Blur, BoxCenter, BoxImg, CenterText, Container } from './stayle.js'
import Logo2 from "../../assets/usat/home2.png"
import Button from '../Generic/Button/index.jsx'

export const CenterPhoto = () => {
    return (
        <Container>
            <BoxImg>
                <Blur />
                <img src={Logo2} alt="" />
            </BoxImg>

            <BoxCenter>
                <p>
                    Vermont Farmhouse With Antique Jail Is
                    the Week's Most Popular Home
                </p>
                <Button>Read more</Button>
            </BoxCenter>
        </Container>
    )
}
