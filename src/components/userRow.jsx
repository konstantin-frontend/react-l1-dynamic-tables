import { useRef } from 'react';

const UserRow = ({ user }) => {
  const trRef = useRef();

  const userRowDelete = () => {
    trRef.current.remove();
  };

  return (
    <tr ref={trRef}>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>
        <button className="button__delete" onClick={userRowDelete}>
          Удалить
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
