import { Container, Content, Icon } from './stayle.js';

export const Footer = () => {
    return (
        <Container>
            <Content>
                <Content.Title>Contact Us</Content.Title>
                <Content.Item>
                    <Icon.Email /> Bunyodkor kochasi, Chilonzor 64-dom, 2-etaj, 1-hone,
                    Webbrain Academy
                </Content.Item>
                <Content.Item>
                    {' '}
                    <Icon.Phone /> 998 99 100 6010
                </Content.Item>
                <Content.Item>
                  xasan_100@icloud.com
                </Content.Item>
            </Content>
            <Content>
                <Content.Title>Wide Renge Of Properties</Content.Title>

                <Content.Item> Uzbekistan</Content.Item>
                <Content.Item> India</Content.Item>
                <Content.Item> UAE</Content.Item>
                <Content.Item> Korea</Content.Item>
            </Content>
            <Content>
                <Content.Title>Financing Made Easy</Content.Title>

                <Content.Item>Frontend </Content.Item>
                <Content.Item>Backend </Content.Item>
                <Content.Item>Mobile </Content.Item>
                <Content.Item>Flutter </Content.Item>
                <Content.Item>Android </Content.Item>
            </Content>
            <Content>
                <Content.Title>See Neighborhoods</Content.Title>

                <Content.Item>t.me/khasan_dev</Content.Item>
                <Content.Item>t.me/Inf_ceo</Content.Item>
                <Content.Item>instagram.com/xasan.1oo</Content.Item>
                <Content.Item>github.com/xasan100</Content.Item>
                <Content.Item></Content.Item>

            </Content>
        </Container>
    );
};

export default Footer;