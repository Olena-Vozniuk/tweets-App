import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: #5736A3;
color: #EBD8FF;
width: 100%;
padding-top: 40px;
padding-bottom: 40px;
gap: 15px;
box-shadow: 0px 2px 13px 1px rgba(0,0,0,0.71)
`;

export const Link = styled.a`
text-decoration: none;
 color: #02c2bd;
 :hover,
 :focus{
    text-decoration: underline;
 }
`