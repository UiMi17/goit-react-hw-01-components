// Task 1
import user from '../user-data/user';
import { Profile } from './user-profile/User-profile';
// Task 2
import stats from '../statistics-data/data';
import { Statistics } from './statistic/Statistics';
// Task 3
import friends from '../friends-list-data/friends';
import { FriendList } from './user-friends/Friend-list';
// Task 4
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

      <Statistics title={'Upload stats'} stats={stats} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

