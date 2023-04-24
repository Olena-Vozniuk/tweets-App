import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { selectFollow } from "redux/selectors";
import { followUser, unfollowUser } from "redux/operations";
import { Button } from "./FollowButton.styled";


export const FollowButton = ({ userData }) => {
  const dispatch = useDispatch();
  const following = useSelector(selectFollow);
  const { id } = userData;
  const isFollowing = following.find(user => user.id === id);
    
  const handleFollow = (userId) => {
    if (!isFollowing) {
      dispatch(followUser(userId));
    } else {
      dispatch(unfollowUser(id));
    }
  };
    
  return (
    <Button
      type="button"
      className={isFollowing && 'following'}
      onClick={
        () => handleFollow(id)
      }>{isFollowing ? 'following' : 'follow'}
    </Button>
  )
};

FollowButton.propTypes = {
  userData: PropTypes.shape({
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })
};
  