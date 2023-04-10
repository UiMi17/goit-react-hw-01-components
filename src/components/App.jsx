import user from '../user-data/user';
import { Profile } from './user-profile/User-profile';
import friends from '../friends-list-data/friends';
import { FriendList } from './user-friends/Friend-list';
import transactions from '../transactions-data/transactions';
import { TransactionHistory } from './transaction-history/Transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions}/>
    </>
  );
};
