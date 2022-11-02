

import React, { useState } from "react";
import { Container, Content, Wrapper } from "./stayle.js";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generic";
import useRequst from "../../hooks/requst.js";
import { message, } from "antd";

export const SiginUp = () => {
    const request = useRequst();
    const [body, setBody] = useState({});
    const navigate = useNavigate();

    const onChange = ({ target: { value, placeholder } }) => {
        setBody({
            ...body,
            [placeholder]: value,
        });
    };
    const info = () => {
        message.info("Email Addres Message Yo Click");
    };
    const warning = () => {
        message.info("Error 401");
    };
    const onSubmit = async () => {

        try {
            let res = await request({
                url: `/public/auth/register`,
                method: "POST",
                body,
                me: true,
            }).then((res) => {

                if (res) {
                    navigate("/signin");
                }
                info();
            });
        } catch (error) {
        }
    };
    return (

        <Container>
            <Wrapper>
                <Container>
                    <Content>
                        <div className="subTitle">Sigin Up</div>
                        <Input onChange={onChange} placeholder="First name" type="text" />
                        <Input onChange={onChange} placeholder="Last name " type="text" />
                        <Input onChange={onChange} placeholder="email" type="email" />
                        <Input onChange={onChange} placeholder="password" type="password" />
                        <Button width="%" onClick={onSubmit}>
                            Login
                        </Button>
                    </Content>
                </Container>,

            </Wrapper>
        </Container>
    );
};

export default SiginUp;


