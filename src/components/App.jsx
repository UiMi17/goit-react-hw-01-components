// Task 1
import user from '../data/user.json';
import { Profile } from './user-profile/Profile.jsx';
// Task 2
import stats from '../data/data.json';
import { Statistics } from './statistic/Statistics.jsx';
// Task 3
import friends from '../data/friends.json';
import { FriendList } from './user-friends/FriendList.jsx';
// Task 4
import transactions from '../data/transactions.json';
import { TransactionHistory } from './transaction-history/TransactionHistory.jsx';

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

      <Statistics title="Upload stats" stats={stats} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};
