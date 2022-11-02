import { Blur, Container, Content, Img } from './stayled.js';
import category from '../../assets/category.png';
import noimg from '../../assets/noimg.jpeg';

export const CategoryCurd = ({  data = {}}) => {
    const { name } = data;
    return (
        <Container >
            <Img src={category || noimg}  />
            <Content>{name || 'Category Name'}</Content>
        </Container>
    );
};

export default CategoryCurd;
