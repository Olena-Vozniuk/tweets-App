
import { Link } from 'react-router-dom';
import LogoImage from 'images/omgTweet.png'

export const Logo = () => (
  <Link to={'/'}>
    <img src={LogoImage} alt="website's logo" width="130px" style={{ paddingLeft: '16px'}} />
  </Link>
);