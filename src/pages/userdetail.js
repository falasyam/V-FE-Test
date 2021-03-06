import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar, { useTitle } from "../components/navbar";

export default function UserDetail() {
  let navigate = useNavigate();

  const [pengguna, setPengguna] = useState([]);
  const { id } = useParams();

  // Title Page
  useTitle(pengguna.first_name);

  // Check Token, Jika tidak ada otomatis dialihkan.
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/";
  }

  // Mengambil data Api
  useEffect(() => {
    async function fetchUsers() {
      axios
        .get(`https://reqres.in/api/users/${id}`)
        .then((res) => {
          const penggunas = res.data.data;
          setPengguna(penggunas);
        })
        .catch((error) => console.log(error));
    }
    fetchUsers();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="py-4"></div>
      <section className="flex flex-col mx-auto px-8 max-w-full py-8">
        <h1 className="">User Detail</h1>
        <div className="py-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-gray-200 p-4 shadow-lg shadow-blue-700/50 justify-items-center items-center content-center">
          <div>
            <img src={pengguna.avatar} alt={pengguna.first_name} />
          </div>
          <div>
            <h1 className="text-center md:text-left text-2xl text-purple-700 font-bold uppercase pb-4">
              {pengguna.first_name} {pengguna.last_name}
            </h1>
            <div className="text-justify md:text-left">{pengguna.email}</div>
          </div>
        </div>
      </section>
      <div className="py-4"></div>
      <section>
        <button
          className="bg-blue-700 px-3 py-4 text-white rounded"
          onClick={() => navigate("/users")}
        >
          Go back
        </button>
      </section>
    </>
  );
}
