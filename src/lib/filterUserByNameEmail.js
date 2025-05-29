export const filteredUsers = (users, searchTerm) => {
  return users.filter((user) =>
    `${user.name} ${user.email}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
};
