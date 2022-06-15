export default function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="flex-1 flex flex-col">
      <nav className="px-4 flex justify-between bg-white h-16 border-b-2">
        <ul className="flex items-center">
          <li className="h-6 w-6">ReactJS</li>
        </ul>
        <ul className="flex items-center">
          <li className="">
            <button className="" onClick={handleLogout}>
              Log Out
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
