import { Logo } from 'components/Logo/Logo';
import { Header, NavWrapper, StyledNavLink, Nav } from "./AppBar.styled";

export const AppBar = () => {
    return (
        <Header>  
            <Logo />
            <NavWrapper>               
                <Nav>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/tweets">Tweets</StyledNavLink>
                </Nav>
            </NavWrapper>
        </Header>
    )
};