import styled from 'styled-components';

const Card = styled.div`
position: relative;
width: 380px;
height: 460px;
padding-bottom: 36px;
background: linear-gradient(
    114.99deg, 
    #471CA9 -0.99%, 
    #5736A3 55.34%, 
    #4B2A99 78.99%
    );
box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px rgba(0, 0, 0, 0.23);
border-radius: 20px;
`

const LogoWrapper = styled.div`
padding: 20px;
`

const BgImage = styled.img`
margin-bottom: 18px;
`

const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
&::before {
    content: '';
    width: 380px;
    height: 8px;
    background: #EBD8FF;;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`

const ImgBorder = styled.img`
position: absolute;
left: 150px;
top: 210px;
`

const Avatar = styled.img`
width: 63px;
border-radius: 50%;
margin-bottom: 26px;
position: absolute;
left: 164px;
top: 219px;
`

const InfoList = styled.ul`
text-align: center;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
margin-bottom: 10px;
margin-top: 62px;
`

const ListItem = styled.li`
margin-bottom: 16px;
`


export const styles = {
    Card,
    LogoWrapper,
    ImgBorder,
    BgImage,
    ContentWrapper,
    Avatar,
    InfoList,
    ListItem,
};