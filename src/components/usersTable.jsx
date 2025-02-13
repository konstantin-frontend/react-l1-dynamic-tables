import { useRef } from 'react';
import { users } from '../assets/users';

const UsersTable = () => {
  const userRow = users.map((user) => {
    const trRef = useRef();

    const buttonDelete = (
      <button className="button__delete" onClick={() => userRowDelete(trRef)}>
        Удалить
      </button>
    );

    function userRowDelete(ref) {
      ref.current.remove();
    }

    return (
      <tr key={user._id} ref={trRef}>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{buttonDelete}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>{userRow}</tbody>
    </table>
  );
};

export default UsersTable;
