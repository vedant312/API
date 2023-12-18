import * as yup from 'yup';

const MIN_LENGTH = {
  name: 3,
  email: 6,
  city: 2,
  country: 2,
};

const MAX_LENGTH = {
  name: 30,
  email: 30,
  city: 20,
  country: 20,
};

const getUser = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup.number().required(),
      }),
    },
  },
};

const addUser = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        name: yup.string().min(MIN_LENGTH.name).max(MAX_LENGTH.name).required(),
        email: yup.string().email().min(MIN_LENGTH.email).max(MAX_LENGTH.email),
        city: yup.string().min(MIN_LENGTH.city).max(MAX_LENGTH.city),
        country: yup.string().min(MIN_LENGTH.country).max(MAX_LENGTH.country),
      }),
    },
  },
};

const updateUser = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup.number().required(),
      }),
    },
    body: {
      yupSchema: yup.object().shape({
        name: yup.string().min(MIN_LENGTH.name).max(MAX_LENGTH.name),
        email: yup.string().email().min(MIN_LENGTH.email).max(MAX_LENGTH.email),
        city: yup.string().min(MIN_LENGTH.city).max(MAX_LENGTH.city),
        country: yup.string().min(MIN_LENGTH.country).max(MAX_LENGTH.country),
      }),
    },
  },
};

const removeUser = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup.number().required(),
      }),
    },
  },
};

export default {
  getUser,
  addUser,
  updateUser,
  removeUser,
};
