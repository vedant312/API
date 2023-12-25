import test from 'ava';

import userService from '../user.service';

let sampleUser;
let updatedUser;
test.beforeEach(() => {
  sampleUser = {
    name: 'John Doe',
    email: 'joedoe@gmail.cim',
    city: 'New York',
    country: 'USA',
  };
  updatedUser = {
    name: 'Updated John',
    email: 'updated@gmail.com',
    city: 'New York',
    country: 'USA',
  };
});

test('Must add a user', (t) => {
  const expectedId = 1;
  const response = userService.addUser(sampleUser);
  t.is(response.id, expectedId);
  t.deepEqual(response, { id: expectedId, ...sampleUser });
});

test('Must get all user', (t) => {
  const expectedId = 1;

  userService.addUser(updatedUser);
  const response = userService.getAllUser();
  t.deepEqual(response, [
    { id: 1, ...sampleUser },
    { id: 2, ...updatedUser },
  ]);
});

test('Must retrieve a user', (t) => {
  const expectedId = 1;
  const response = userService.getUser(expectedId);
  t.is(response.id, expectedId);
  t.deepEqual(response, { id: expectedId, ...sampleUser });
});

test('Must update a user', (t) => {
  const expectedId = 1;
  const response = userService.updateUser(1, updatedUser);
  t.is(response.id, expectedId);
  t.deepEqual(response, { id: expectedId, ...updatedUser });
});

test('Must delete a user', (t) => {
  const expectedId = 1;
  const response = userService.removeUser(1);
  t.is(response.id, expectedId);
  t.deepEqual(response, { id: expectedId, ...updatedUser });
  const user = userService.getUser(expectedId);
  t.is(user, undefined);
});
