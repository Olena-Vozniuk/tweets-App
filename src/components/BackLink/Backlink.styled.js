import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
position: fixed;
z-index: 999;
right: 10px;
margin-top: 118px;
margin-bottom: 10px;
/* margin-left: auto; */
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
padding-left: 5px;
padding-right: 5px;
/* width: 196px; */
background: #5736A3;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
cursor: pointer;
:hover,
:focus {
    background: #5CD3A8;
    color: rgba(55, 55, 55, 1);
  }
`

export const LinkStyled = styled(Link)`
text-decoration: none;
color: #EBD8FF;
display: flex;
align-items: center;
justify-content: center;
padding: 16px 0px;
:hover,
:focus {
    color: rgba(55, 55, 55, 1);
  }
`