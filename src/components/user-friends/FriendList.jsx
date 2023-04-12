// Libraries
import PropTypes from 'prop-types';
// Files
import { FriendListItem } from './FriendListItem';
// Styles
import { StyledFriendList } from './StyledFriend-list';

export const FriendList = ({ friends }) => {
  return (
    <StyledFriendList>
      {friends.map(friend => {
        return (
          <FriendListItem
            userAvatar={friend.avatar}
            username={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        );
      })}
    </StyledFriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
