import styled from 'styled-components';
import image from '../../images/homeBg.jpg';

export const BG = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: calc(100vh + 100px);
margin-top: -100px;
background-image: url(${image});
background-repeat: no-repeat;
background-size: cover;
`

export const Cat = styled.img`
cursor: pointer;
position: absolute;
transition: transform 0.5s ease-in-out;
:hover{
transform: rotate(360deg);
}
`

export const Wrapper = styled.div`
position: relative;
width: 400px;
height: 400px;
`

export const Title = styled.h1`
font-family: 'Helvetica Neue', sans-serif;
font-weight: 600;
text-shadow: 3px 3px 3px #000000;
color: #EBD8FF;
margin-bottom: 15px;
margin-top: 150px;
`