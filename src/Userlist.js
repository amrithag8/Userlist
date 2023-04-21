const Userlist = ({ name, id, users, setUsers }) => {
  const deleteHandler = (_id) => {
    let userList = users.filter((item) => {
      return _id !== item.id;
    });
    setUsers(userList);
  };

  return (
    <div className="users">
      <ul>
        <li>{name}</li>
        <div className="delete">
          <button onClick={() => deleteHandler(id)}>Delete</button>
        </div>
      </ul>
    </div>
  );
};

export default Userlist;
