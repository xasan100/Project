import styled from "styled-components";
export const Blur = styled.div`
position: absolute ;
top: 0px ;
bottom:  0px ;
right: 0px ;
left: 0px ;
background-color: rgba(0,0,0,0.5) ;
`

export const Container = styled.div`
position: relative;
`

export const BoxImg = styled.div`
>img{
    width: 100% ;
    .img2{
        height: 571px ;
    }
}
`
// export const CenterText = styled.div`
// display: flex ;
// align-items: center ;
// justify-content: center ;
// font-style: normal;
// font-weight: 600;
// font-size: 28px;
// line-height: 36px;
// text-align: center;
// letter-spacing: -0.02em;
// color: #FFFFFF;
// z-index:999 ;
// position:absolute ;
// `
export const BoxCenter = styled.div`
position: absolute ;
top: 0px ;
bottom:  0px ;
right: 0px ;
left: 0px ;
display: flex;
align-items: center ;
justify-content: center ;
color: white ;
flex-direction: column ;
>P{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 24px;
color: #FFFFF0;
width: 50% ;
text-align: center ;
}
`