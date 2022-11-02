// import { Container, Content, Details, Img, Icons, Divider } from './styled.js';
// import noimg from '../../assets/noimg.jpeg';

// export const HouseCard = ({ data = {}, onClick, gap }) => {
//     const {
//         attachments,
//         salePrice,
//         price,
//         houseDetails,
//         address,
//         city,
//         country,
//         description,
//         category,
//     } = data;
//     return (
//         <div style={{ display: 'flex' }} onClick={onClick}>
//             <Container gap={gap}>
//                 <Img src={(attachments && attachments[0]?.imgPath) || noimg} />
//                 <Content>
//                     <div className='subTitle inline'>
//                         {city}, {country}, {description}
//                     </div>
//                     <div className='info'>
//                         {address || 'Quincy St, Brooklyn, NY, USA'} -{' '}
//                         {category?.name || 'Category'} {houseDetails?.room || 0}-rooms
//                     </div>
//                     <Details>
//                         <Details.Item>
//                             <Icons.Bed />
//                             <div className='info'>Bed {houseDetails?.beds || 0}</div>
//                         </Details.Item>
//                         <Details.Item>
//                             <Icons.Bath />
//                             <div className='info'>Bath {houseDetails?.bath || 0}</div>
//                         </Details.Item>
//                         <Details.Item>
//                             <Icons.Garage />
//                             <div className='info'>Garage {houseDetails?.garage || 0} </div>
//                         </Details.Item>
//                         <Details.Item>
//                             <Icons.Ruler />
//                             <div className='info'>Area {houseDetails?.area || 0}kv</div>
//                         </Details.Item>
//                     </Details>
//                 </Content>
//                 <Divider />
//                 <Content footer>
//                     <Details.Item footer>
//                         <div className='info'>${salePrice || 0}/mo</div>
//                         <div className='subTitle'>${price || 0}/mo</div>
//                     </Details.Item>
//                     <Details.Item row>
//                         <Icons.Resize />
//                         <Icons.Love />
//                     </Details.Item>
//                 </Content>
//             </Container>
//         </div>
//     );
// };

// export default HouseCard;


import { Container, Content, Details, Img, Icons, Divider } from './styled.js';
import noimg from '../../assets//noimg.jpeg';
import { message } from 'antd';
import {  useContext, useEffect } from 'react';
import { PropertiesContext } from '../../context/properties/index.jsx';

export const HouseCard = ({ data = {}, gap, onClick }) => {
    const [state] = useContext(PropertiesContext)

    const {
        attachments,
        salePrice,
        price,
        houseDetails,
        address,
        city,
        country,
        description,
        category,
        favorite,
        id,
    } = data;
    // console.log(state, "sstate");

    const onSave = (event) => {
        event?.stopPropagation()
        console.log(event, 'event');
        fetch(`https://houzing-app.herokuapp.com/api/v1/houses/addFavourite/${id}?favourite=${!favorite}
`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((res) => res.json())
            .then((res) => {
                if (favorite) {
                    res?.success && message.warning('Succesfully  disliked')
                }
                else res?.success && message.info('Succesfully  liked');
            })
        state?.refetch && state?.refetch()
        console.log(state,'statettette');


    }
    return (
        <div style={{ display: 'flex' }} onClick={onClick}>
            <Container gap={gap}>
                <Img src={(attachments && attachments[0]?.imgPath) || noimg} />
                <Content>
                    <div className='subTitle inline'>
                        {city}, {country}, {description}
                    </div>
                    <div className='info'>
                        {address || 'Quincy St, Brooklyn, NY, USA'} -{' '}
                        {category?.name || 'Category'} {houseDetails?.room || 0}-rooms
                    </div>
                    <Details>
                        <Details.Item>
                            <Icons.Bed />
                            <div className='info'>Bed {houseDetails?.beds || 0}</div>
                        </Details.Item>
                        <Details.Item>
                            <Icons.Bath />
                            <div className='info'>Bath {houseDetails?.bath || 0}</div>
                        </Details.Item>
                        <Details.Item>
                            <Icons.Garage />
                            <div className='info'>Garage {houseDetails?.garage || 0} </div>
                        </Details.Item>
                        <Details.Item>
                            <Icons.Ruler />
                            <div className='info'>Area {houseDetails?.area || 0}kv</div>
                        </Details.Item>
                    </Details>
                </Content>
                <Divider />
                <Content footer>
                    <Details.Item footer>
                        <div className='info'>${salePrice || 0}/mo</div>
                        <div className='subTitle'>${price || 0}/mo</div>
                    </Details.Item>
                    <Details.Item row>
                        <Icons.Resize />
                        <Icons.Love onClick={onSave} favorite={favorite} />
                    </Details.Item>
                </Content>
            </Container>
        </div>
    );
};

export default HouseCard;