import { useEffect, useState } from "react";
import { styles } from "./style.js";
import { users } from "./constants.js";
import { filteredUsers } from "../../lib/filterUserByNameEmail.js";

export default function UserListWithSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (searchTerm.length >= 3) {
      // prevents unnnecessary filtering (usefull for high volume data)
      setFiltered(filteredUsers(users, searchTerm));
    } else {
      setFiltered(users); // show all users
    }
  }, [searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h2>User Directory</h2>
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={handleChange}
        style={styles.input}
      />
      <ul style={styles.list}>
        {filtered.length > 0 ? (
          filtered.map((user) => (
            <li key={user.id} style={styles.listItem}>
              <strong>{user.name}</strong> - {user.email} ({user.role})
            </li>
          ))
        ) : (
          <li style={styles.noResult}>No results found</li>
        )}
      </ul>
    </div>
  );
}
