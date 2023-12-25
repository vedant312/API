import users from '../data/users.data';

const getAll = () => users;

const get = (userId) => users.find((user) => user.id === userId);

const update = (userId, newDetails) => {
  let existingUser = null;
  let userIndex;
  users.map((user, index) => {
    if (user.id === userId) {
      existingUser = user;
      userIndex = index;
    }
  });

  if (!existingUser) {
    return null;
  }

  const updatedUser = {
    ...existingUser,
    ...newDetails,
  };

  users.splice(userIndex, 1, updatedUser);

  return users[userIndex];
};

const insert = (details) => {
  const maxId = users.reduce((max, user) => (user.id > max ? user.id : max), 0);
  const newUser = { id: maxId + 1, ...details };
  users.push(newUser);

  return newUser;
};

const remove = (userId) => {
  const deleteUser = users.find((user, index) => {
    if (user.id === userId) {
      users.splice(index, 1);
      return true;
    }
    return false;
  });

  return deleteUser;
};

export default {
  get,
  getAll,
  update,
  insert,
  remove,
};
