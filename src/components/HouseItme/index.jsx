import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Box, BoxName, Container, Content, Control, Descriptio, Description, Details, Icons, Section, TextLarge, User, Wrapper } from "./stayle.js";
import useRequest from "../../hooks/requst.js";
import { Input, } from "../Generic/Input/index.jsx"
import { Button, } from "../Generic/Button/index.jsx"
import { Checkbox } from "antd";
import Men from "../../assets/img/nouser.jpg"
import { YandexMaps } from "../Generic/YandexMaps/index.jsx";
import Recent from "../Recent/index.jsx";

export const HouseItme = () => {
    const [data, setData] = useState({});
    const params = useParams();
    const request = useRequest()
    useEffect(() => {
        fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id/${params?.id}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res?.data)
                window.scrollTo(0, 0);
            })
    }, [params?.id]);



    return (
        <Box>
            <Wrapper>
                <Container flex={3}>
<div><h1>hello</h1></div>
                    <Section>
                        <Content>
                            <div className="Title"> {data?.name}</div>
                            <div className="Info"> {data?.address}</div>
                        </Content>
                        <div>
                            <Section>
                                <Icons.Share />
                                <Icons.Title>Share</Icons.Title>
                            </Section>
                            <Section>
                                <Icons.Love />
                                <Icons.Title>Save</Icons.Title>
                            </Section>
                        </div>
                    </Section>
                    <Section>
                        <Details>
                            <div> <Icons.Bed /></div>
                            <Details.Title>Bed {data?.houseDetails?.beds || 0}</Details.Title>
                            <div>  <Icons.Bath /></div>
                            <Details.Title>Bath {data?.houseDetails?.bath || 0}</Details.Title>
                            <div><Icons.Garage /></div>
                            <Details.Title>Garage {data?.houseDetails?.garage || 0} </Details.Title>
                            <div><Icons.Ruler /></div>
                            <Details.Title>Area {data?.houseDetails?.area || 0}kv</Details.Title>
                        </Details>
                        <Details.Item footer>
                            <Control>
                                <div><Details.Title> <del>  ${data?.salePrice || 0}/mo</del> </Details.Title></div>
                                <div className="Title">${data?.price || 0}/mo</div>
                            </Control>

                            <BoxName> <Details.Title>  {data?.user?.lastname || 0} </Details.Title>  </BoxName>
                        </Details.Item>
                    </Section>
                    <TextLarge>
                        Description
                    </TextLarge>
                    <Description> {data?.description}</Description>
                    <TextLarge>
                        Location
                        <YandexMaps />
                    </TextLarge>
                </Container>
                <Container flex={1} className='User'>
                    <Section style={{ justifyContent: "flex-start" }}>
                        <User.Img src={Men} />
                        <Content>
                            <div className="SubTitle">Xasan</div><div className="Info">+998991006010</div>
                        </Content>
                    </Section>
                    <Input placeholder='Name' />
                    <Input placeholder='Phone' />
                    <Input placeholder='Email' />
                    <Input placeholder='Message' />
                    <Checkbox> By submitting this form I agree to Terms of Use</Checkbox>
                    <Button> Send request</Button>
                </Container>
            </Wrapper >
            <Recent />
        </Box>
    );
};

export default HouseItme;