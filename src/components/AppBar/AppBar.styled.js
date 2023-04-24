import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
position: fixed;
right: 0;
top: 0;
z-index: 999;
display: flex;
align-items: center;
background: #5736A3;
width: 100%;
height: 100px;
gap: 15px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

export const NavWrapper = styled.div`
width: 100%;
display: flex;
margin-right: 10px;
justify-content: flex-end;
align-items: center;
padding: 0 10px 0 10px;
`;

export const StyledNavLink = styled(NavLink)`
font-family: 'Helvetica Neue', sans-serif;
font-size: 40px;
text-decoration: none;
font-weight: 600;
color: #EBD8FF;
&.active {
    color: #02c2bd;
  }
`;

export const Nav = styled.nav`
display: flex;
gap: 15px;
`;