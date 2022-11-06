
import styled from "styled-components"

const getWidth = ({ width }) => {
    if (`${!width}`.includes('%')) return '130px'
    else if (`${width}`.includes('%')) return '100%'
    else return `${width}px`

}

const getType = ({ type }) => {
    switch (type) {
        case "dark":
            return {
                background: "transparent",
                border: "1px solid #fff",
                color: '#ffff',
                active: 'yellow'
            }
        case 'primary': return {
            background: "#0061FD",
            border: "none",
            color: '#FFFFFF',
            background: "#0061FD",



        }
        case "ligth":
            return {
                background: "transparent",
                border: "1px solid #E6E9EC",


            }

        default:
            return {
                border: "none",
                color: '#12343',
                background: "#0061FD",
                color: '#ffff',

            }
    }
};

const Container = styled.button`
border: 1px solid red ;
display: flex ;
justify-content: center ;
align-items:  center;
width:  120px;
width: ${getWidth};
cursor: pointer;
opacity: ${ ({ disabled }) => disabled ? ` 0.7` : '1' };
cursor: ${ ({ disabled }) => disabled ? 'not-allowed' : 'ponter' };

height: ${ ({ height }) => height ? `${height} px` : '44px' };

${ getType }
:active {
    color: ${ ({ active }) => active ? 'yellow' : "" };
    border: ${ ({ boractive }) => boractive ? '1px solid yellow' : "" };
    opacity:0.7;
}
`



export default Container