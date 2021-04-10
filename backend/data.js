import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Jessica lever',
      email: 'Jessicaadmin@example.com',
      password: bcrypt.hashSync('12346', 8),
      isAdmin: true,
    },
    {
      name: 'Deany',
      email: 'deanadmin@example.com',
      password: bcrypt.hashSync('12345', 8),
      isAdmin: false,
    },
  ]
};
export default data;
