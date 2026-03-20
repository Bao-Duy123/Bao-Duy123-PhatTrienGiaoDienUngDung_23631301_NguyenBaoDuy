import { useEffect, useState } from "react";

function Bai3() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //1 kiem tra nhanh dieu kien
    if (userId < 1 || userId > 10 || userId === "") {
      setUser(null);
      setError("Khong thi thay user (ID tu 1 - 10)");
      return;
    }

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`) ;
        //lỗi không dùng dấu nháy huyền để truyền tham số
       if(!res.ok) throw new Error("Khong tin thay user")

        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
        setUser(null)
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);
  return (
    <div>
        <h3>Tìm kiếm user theo ID</h3>
      <input 
      type="number"
      value={userId}
      onChange={(e)=> setUserId(e.target.value)}
      placeholder="Nhập ID (1-10)"
      />
       <hr />
       {isLoading && <p>Đang tìm kiếm...</p>}
       {error && <p>{error}</p>}
        {user && !isLoading &&(
            <div>
                <p>ID: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
            </div>
        )}

    </div>
  );
}
export default Bai3;
