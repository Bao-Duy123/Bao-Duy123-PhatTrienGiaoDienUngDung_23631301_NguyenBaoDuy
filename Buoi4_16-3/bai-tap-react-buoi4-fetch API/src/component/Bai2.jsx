import { useEffect, useState } from "react";

function Bai2() {
    // khoi tao state users, loading, error
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    //dung useEffect + async de fetch API

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsLoading(true);
                const res = await fetch("/data.json");
                if (!res.ok) {
                    throw new Error("Không thể lấy dữ liệu từ server!");
                }
                const data = await res.json();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchUsers();
    }, []);

    if (isLoading) return <h1 >Đang tải dữ liệu...</h1>;
    if (error) return <h1>Lỗi: {error}</h1>;

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} -{user.email}
                    </li>
                ))}</ul>
        </div>
    );
}
export default Bai2;
