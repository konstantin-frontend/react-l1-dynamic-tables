import { useState } from 'react';
import users from '../assets/users';
import UserRow from './userRow';

const UsersTable = () => {
  const sortStates = ['default', 'ascending', 'descending'];
  const [sortIndex, setSortIndex] = useState(0);
  const [sortedUsers, setSortedUsers] = useState(users);
  const [trClassName, setTrClassName] = useState('default');

  const sortUsersBy = (sort, sortingBy) => {
    let newSortedUsers = [...users];

    if (sort === 'ascending' && sortingBy === 'age') {
      newSortedUsers.sort((a, b) => a.age - b.age);
    } else if (sort === 'descending' && sortingBy === 'age') {
      newSortedUsers.sort((a, b) => b.age - a.age);
    } else if (sort === 'ascending' && sortingBy === 'name') {
      newSortedUsers.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'descending' && sortingBy === 'name') {
      newSortedUsers.sort((a, b) => b.name.localeCompare(a.name));
    }

    setTrClassName(sortingBy + '-' + sort);
    setSortedUsers(newSortedUsers);
  };

  const handleSortClick = (sortingBy) => {
    const newSortIndex = (sortIndex + 1) % sortStates.length;
    setSortIndex(newSortIndex);
    const newSort = sortStates[newSortIndex];
    sortUsersBy(newSort, sortingBy);
  };

  return (
    <table>
      <thead>
        <tr className={trClassName}>
          <th>
            <span>Имя</span>
            <span onClick={() => handleSortClick('name')}></span>
          </th>
          <th>
            <span>Возраст</span>
            <span onClick={() => handleSortClick('age')}></span>
          </th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <UserRow key={user._id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
