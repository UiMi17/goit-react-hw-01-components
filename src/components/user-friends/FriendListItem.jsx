import {
  StyledFriendListElement,
  StyledStatus,
} from './StyledFriend-elements';

export const FriendListItem = ({ userAvatar, username, isOnline }) => {
  return (
    <StyledFriendListElement>
      <StyledStatus
        spanColor={isOnline === false ? 'red' : 'lightgreen'}
      ></StyledStatus>
      <img className="avatar" src={userAvatar} alt="User avatar" width="48" />
      <p className="name">{username}</p>
    </StyledFriendListElement>
  );
};
