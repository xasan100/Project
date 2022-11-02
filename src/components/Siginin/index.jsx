

import React, { useState } from "react";
import { AntTabs, Container, Content, Contents, Wrapper } from "./stayle.js";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generic";
import useRequst from "../../hooks/requst.js";
import { message, } from "antd";

export const SiginIn = () => {
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
        message.info("Successfully logged in ");
    };
    const warning = () => {
        message.info("Error 401");
    };
    const onSubmit = async () => {

        try {
            let res = await request({
                url: `/public/auth/login`,
                method: "POST",
                body,
                me: true,
            }).then((res) => {

                if (res?.authenticationToken) {
                    navigate("/home");
                    localStorage.setItem("token", res?.authenticationToken);
                }
                info();
            });
        } catch (error) {
            warning()
        }
    };

    return (

        <Container>
            <Wrapper>
                <Container>
                    <Content>
                        <div className="subTitle">Sing in</div>
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

export default SiginIn;


