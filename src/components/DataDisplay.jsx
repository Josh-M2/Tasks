import { useEffect, useState } from "react";

export default function DataDisplay() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the first 5 posts from the API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          //catch HTTP errors early
          throw new Error("Failed to fetch posts.");
        }
        return response.json();
      })
      .then((data) => {
        const firstFivePosts = data.slice(0, 5); // Take only the first 5 posts
        setPosts(firstFivePosts);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <h2>Stuff</h2>
      {/* dynamically show the error and the data */}
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
