// import React from 'react'
// import { Container } from './stayle'
// import { useEffect } from 'react'
// import { useState } from 'react';
// import CategoryCurd from '../CategoryCurd/index.jsx';
// import Slider from "react-slick";


// const { REACT_APP_BASE_URL: url } = process.env;

// const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "60px",
//     slidesToShow: 4,
//     speed: 500
// };
// export const Category = () => {



//     const [data, setData] = useState([])

//         ;

//     useEffect(() => {
//         fetch(`${url}/categories/list`)
//             .then((res) => res.json())
//             .then((res) => {
//                 setData(res?.data || []);
//             })
//     }, []);
//     return (
//         <Container>
//             <Slider {...settings}>

//                 {data.map((value ) => {
//                     return <CategoryCurd />
//                 })}
//             </Slider>


//         </Container>
//     )
// }




import React, { useEffect, useState } from "react";
import { Container, Content } from "./stayle.js";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import HouseCard from "../HouseCard/index.jsx";


const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    adaptiveHeight: true,
    dots: true,

    appendDots: (dots) => <h1> {dots} </h1>,
};

export const Recent = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${url}/houses/list`)
            .then((res) => res.json())
            .then((res) => {
                setData(res?.data || []);
            });
    }, []);
    return (
        <Container>
            <Content>
                <h1 className="title">Recent Properties for Rent</h1>
                <div className="info">
                    Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
                </div>
            </Content>
            <Slider {...settings}>
                {data.map((value,id) => {
                    return (
                        <HouseCard key={id} data={value} onClick={() => navigate(`/properties/${value.id}`)} />
                    );
                })}
            </Slider>
        </Container>
    );
};

export default Recent;