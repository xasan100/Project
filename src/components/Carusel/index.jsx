import { Carousel } from 'antd'
import React, { useRef } from 'react'
import { Arow, Blur, BoxCenter, BoxImg, CeterText, Container } from './stayle'
import CenterLogo1 from "../../assets/usat/Home.png"
import CenterLogo2 from "../../assets/usat/home2.png"


export const GenCarusel = () => {
    const slider = useRef()

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    const onChange = (currentSlide) => {
    };
    const onMove = ({ target: { dataset: { name } } }) => {
        if (name =='right') slider.current.next();
        if (name == 'left') slider.current.prev();

    }
    return (
        <Container>
            <Arow data-name="rith" />
            <Carousel ref={slider}  afterChange={onChange}>
                {/* autoplay */}
                <BoxImg>
                    <img src={CenterLogo1} alt="" />
                    <Blur />
                </BoxImg>
                <BoxImg>
                    <img className='img2' src={CenterLogo2} alt="" />
                    <Blur />
                </BoxImg>
            </Carousel>
            <BoxCenter>
                <CeterText>
                    Skyper Pool Partment
                </CeterText>
                <p>112 Glenwood Ave Hyde Park, Boston, MA</p>
            </BoxCenter>
            <Blur />
            <Arow data-name='left' onClick={onMove} left={'true'} />
            <Arow data-name='right' onClick={onMove} name='right' />
        </Container>
    )
}
