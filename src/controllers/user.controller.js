import { StatusCodes } from 'http-status-codes';

import userService from '../services/user.service';

const getAllUsers = (req, res) => {
  const users = userService.getAllUser();

  if (users.length) {
    return res.status(StatusCodes.OK).send({
      status: 'success',
      data: users,
    });
  }
  return res.status(StatusCodes.NOT_FOUND).send({
    status: 'error',
    message: 'No users found',
  });
};

const getUser = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = userService.getUser(id);

  if (user) {
    return res.status(StatusCodes.OK).send({
      status: 'success',
      data: user,
    });
  }
  return res.status(StatusCodes.NOT_FOUND).send({
    status: 'error',
    message: `No user found with id ${id}`,
  });
};

const addUser = (req, res) => {
  const { body: user } = req;

  const addedUser = userService.addUser(user);

  return res.status(StatusCodes.CREATED).send({
    status: 'success',
    data: addedUser,
  });
};

const updateUser = (req, res) => {
  const { body: user } = req;

  const id = parseInt(req.params.id, 10);
  const UpdatedUser = userService.updateUser(id, user);

  if (UpdatedUser) {
    return res.status(StatusCodes.CREATED).send({
      status: 'success',
      data: UpdatedUser,
    });
  } else {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: 'error',
      message: `User ${id} not found`,
    });
  }
};

const removeUser = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const status = userService.removeUser(id);
  let response;
  if (status) {
    response = {
      status: 'success',
      message: `User ${id} removed`,
    };
  } else {
    response = {
      status: 'error',
      message: `User id ${id} not found`,
    };
  }
  return res.status(StatusCodes.OK).send(response);
};

export default {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  removeUser,
};
