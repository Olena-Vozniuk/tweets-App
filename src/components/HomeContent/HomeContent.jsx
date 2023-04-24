import { BG, Cat, Wrapper, Title } from './HomeContent.styled';
import cat from '../../images/cat.png';

export const HomeContent = () => {
    return (
        <BG>
            <Title>Wellcome to the App
            </Title>
            <Wrapper>
                <Cat src={cat} alt="cat" />
            </Wrapper>
        </BG>
    )
};