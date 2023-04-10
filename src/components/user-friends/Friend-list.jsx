import { FriendListItem } from './Friend-elements';

export const FriendList = ({friends}) => {
  return (
    <ul className="friend-list">
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
    </ul>
  );
};
