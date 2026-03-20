import { useEffect, useState } from "react";

function Bai4() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchPost();
  }, []);

  const filterPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (<div>
    <input type="text"
    placeholder="Tìm kiếm theo tiêu đề:"
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    />

    <ul>
        {filterPosts.map(post=> (
            <li key={post.id}>{post.id}- {post.title}</li>
        ))}
    </ul>
  </div>);
}
export default Bai4;
