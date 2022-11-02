



import React from "react";
import { Container, Content, Icons, Wrapper } from "./stayle.js";




export const Why = () => {

    return (
        <Container>
            <Content>
                <h1 className="title">Why Choose  Us </h1>
                <div className="info">
                    Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
                </div>
            </Content>
            <Wrapper>
                <Content>
                    <Icons.Message />
                    <div className="SubTitle"> Trusted By Thousands</div>
                    <div className="info">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</div>
                </Content>
                <Content>
                    <Icons.Home /> <div className="SubTitle">
                        Wide Renge Of Properties
                    </div>
                    <div className="info">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</div>
                </Content>
                <Content>
                    <Icons.Calculator />
                    <div className="SubTitle">
                        Financing Made Easy
                    </div>
                    <div className="info">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</div>
                </Content>
                <Content>
                    <Icons.Maps />
                    <div className="SubTitle">
                        See Neighborhoods
                    </div>
                    <div className="info">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</div>
                </Content>


            </Wrapper>
        </Container>
    );
};

export default Why;