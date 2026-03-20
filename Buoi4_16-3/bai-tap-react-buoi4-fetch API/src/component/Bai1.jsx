import { useEffect, useState } from "react"


function Bai1 () {
    //Khoi tao state de luu tru danh sach users
    const [users, setUsers] = useState([]);


    // const [data, setData] = useState('');
    useEffect(
        ()=>{
            const fetchUsers = async()=>{
                try {
                    const res = await fetch('https://jsonplaceholder.typicode.com/users');
                    const data = await res.json();
                    setUsers(data);
                } catch (error) {
                    console.error("Loi khi fetch du lieu", error);
                }
            };
            fetchUsers();
        }, []
    );
    

    return(
        <div>
        <h1>Danh sach nguoi dung</h1>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>
                    <strong>Name:</strong>{user.name} <br />
                    <strong>Email:</strong>{user.email}
                    <hr />
                </li>
            ))}
        </ul>
        </div>
    )
}
export default  Bai1
//Muc tieu la fetch API