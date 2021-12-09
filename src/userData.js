let users = [
  {
    id: "1",
    name: "Hrishi",
    phone: "8793340160",
    email: "hrishi@gmail.com"
  },
  {
    id: "2",
    name: "Aryan",
    phone: "871321161",
    email: "aryan@gmail.com"
  },
  {
    id: "3",
    name: "Rohan",
    phone: "8578340442",
    email: "rohan@gmail.com"
  }
];

export function getUsers() {
  return users;
}

export function getUser(id) {
  return users.find((user) => user.id === id);
}

export function editUser(id, name, phone, email) {
  users.find((user) => {
    if (user.id === id && name && phone && email) {
      user.name = name;
      user.phone = phone;
      user.email = email;
      return true;
    } else {
      console.error("incomplet filed entry");
      return false;
    }
  });
}
