import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

async function userLogin(credentials) {
  return fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

// Title Document
export function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    return () => {
      document.title = prevTitle;
    };
  });
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Title Page
  useTitle("Login");

  let navigate = useNavigate();

  // Jika Tombol Login Dipencet
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await userLogin({
      email,
      password,
    });
    if ("token" in response) {
      // Token akan disimpan di penyimpanan lokal
      localStorage.setItem("token", JSON.stringify(response.token));
      console.log(response.token);
      navigate("/users");
    } else {
      // Menampilkan Error
      alert(response.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="block w-full text-center">Login Page</h1>
        </div>
        <div className="py-4"></div>
        <div className="bg-white rounded shadow-lg p-8 m-4">
          <form className="mb-4" onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="email"
                className="text-left mb-2 uppercase font-bold text-lg text-gray-700"
              >
                Email
              </label>
              <input
                className="border py-2 px-3 text-gray-800"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="password"
                className="text-left mb-2 uppercase font-bold text-lg text-gray-700"
              >
                Password
              </label>
              <input
                className="border py-2 px-3 text-gray-800"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
