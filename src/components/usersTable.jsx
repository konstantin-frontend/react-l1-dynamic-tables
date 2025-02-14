import users from '../assets/users';
import UserRow from './userRow';

const UsersTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow key={user._id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
