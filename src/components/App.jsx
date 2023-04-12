// Task 1
import user from '../user-data/user.json';
import { Profile } from './user-profile/User-profile.jsx';
// Task 2
import stats from '../statistics-data/data.json';
import { Statistics } from './statistic/Statistics.jsx';
// Task 3
import friends from '../friends-list-data/friends.json';
import { FriendList } from './user-friends/Friend-list.jsx';
// Task 4
import transactions from '../transactions-data/transactions.json';
import { TransactionHistory } from './transaction-history/Transactions.jsx';

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

      <Statistics title={'Upload stats'} stats={stats} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};