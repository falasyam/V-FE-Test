import { useNavigate } from "react-router-dom";
import { useTitle } from "../components/navbar";

export default function NotFound() {
  let navigate = useNavigate();
  const back = () => {
    navigate("/");
  };

  useTitle("404 Page Not Found");

  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-bold text-7xl stroke-1 text-gray-800">404</h1>
          <p className="text-black">PAGE NOT FOUND</p>
          <br />
          <button onClick={back} className="bg-blue-700 px-4 py-3 rounded-full text-white">
            BACK TO HOME
          </button>
        </div>
      </div>
    </>
  );
}
