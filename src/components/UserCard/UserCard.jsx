import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { selectFollow } from "redux/selectors";
import { FollowButton } from "components/FollowButton/FollowButton";
import { styles } from "./UserCard.styled";
import Logo from "images/logo.png";
import BGImage from "images/tweetsBg.png";
import Ellipse from "images/ellipse.png";

const { Card, ContentWrapper, BgImage, Avatar, InfoList, ListItem, LogoWrapper, ImgBorder } = styles;

export const UserCard = ({ userData }) => {
    // const isLoading = useSelector(selectIsLoading);
    const { tweets, avatar, id, followers } = userData;
    const following = useSelector(selectFollow);
    const isFollowing = following.find(user => user.id === id);

    const visibleFollowers = isFollowing ? isFollowing.followers.toLocaleString('en-US') : followers.toLocaleString('en-US');

    return (
        <Card id={id}>
            <LogoWrapper>
                <img src={Logo} alt="logo of the company GoIT" />
            </LogoWrapper>
            
            <BgImage src={BGImage} alt="two chats" />
            <ContentWrapper>
                <ImgBorder src={Ellipse} alt="ellipse" />
                <Avatar src={avatar} alt="avatar" />
                <InfoList>
                    <ListItem>{tweets} tweets</ListItem>
                    <ListItem>{visibleFollowers} followers</ListItem>
                </InfoList>
                <FollowButton userData={userData} />
            </ContentWrapper>
        </Card>
    )
};

UserCard.propTypes = {
  userData: PropTypes.shape({
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })
};