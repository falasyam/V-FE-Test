import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://reqres.in/api/users/");
      const json = await response.json();

      setUsers([...users, ...json.data]);
    }
    fetchUsers();
  }, []);
  return (
    <>
      <Navbar />
      <div className="py-4"></div>
      <section className="px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {users.map((user) => (
            <div className="bg-gray-200 py-4" key={user.id}>
              <Link to={`/users/${user.id}`}>
                <div className="">{user.email}</div>
                <div className="">
                  {user.first_name} {user.last_name}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
