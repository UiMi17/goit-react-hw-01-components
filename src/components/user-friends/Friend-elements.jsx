export const FriendListItem = ({ userAvatar, username, isOnline}) => {
  return (
    <li className="item">
      <span className="status"></span>
      <img className="avatar" src={userAvatar} alt="User avatar" width="48" />
      <p className="name">{username}</p>
    </li>
  );
};

