import React from "react";

import UserList from "../components/UsersList";

const Users = () => {
  const USER = [
    {
      id: "u1",
      name: "Pornpol Wasuwat",
      image: "https://www.9pol.dev/images/9pol.jpg",
      places: 2
    }
  ];

  return <UserList items={USER} />;
};

export default Users;
