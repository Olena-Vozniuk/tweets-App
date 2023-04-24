import { HiChevronDoubleLeft } from "react-icons/hi";
import PropTypes from 'prop-types';
import { Wrapper } from "./Backlink.styled";
import { LinkStyled } from './Backlink.styled';

export const BackLink = ({ to }) => { 
  return (
    <Wrapper>
    <LinkStyled to={to}>
      <HiChevronDoubleLeft size="22" />
      <span>Back</span>
      </LinkStyled> 
      </Wrapper>
  );
};

BackLink.propTypes = {
    to: PropTypes.string.isRequired,
};