import { TiHeartOutline } from 'react-icons/ti';
import { Wrapper, Link } from './Footer.styled';

export const Footer = () => {
    return (    
            <Wrapper>
                <p>Developed with</p>
                <TiHeartOutline />
                <p>by</p>
                <Link href="https://github.com/Olena-Vozniuk">Olena Vozniuk</Link>
            </Wrapper>
    )
};