

import React, { useState } from "react";
import { AntTabs, Container, Content, Contents, Wrapper } from "./stayle.js";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generic";
import useRequst from "../../hooks/requst.js";
import { message, } from "antd";
import WrapperStatistic from "antd/lib/statistic/Statistic.js";
import SiginIn from "../Siginin/index.jsx";
import SiginUp from "../Sigininup/index.jsx";

export const Register = () => {
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
                <AntTabs style={{ margin: "64px" }}
                    defaultActiveKey="1"
                    onChange={onChange}
                    items={[
                        {
                            label: `Sigin in`,
                            key: '1',
                            children:
                                <Container>
                                    <SiginIn />
                                </Container>
                        },
                        {
                            label: `Sigin up`,
                            key: '2',
                            children:
                                <Container>
                                    <SiginUp />
                                </Container>,
                        },

                    ]}
                />
            </Wrapper>
        </Container>

        // <Container>

        // </Container>
    );
};

export default Register;


