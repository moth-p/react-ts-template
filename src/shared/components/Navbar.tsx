import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return (
    <nav className="h-16 flex justify-between items-center bg-white shadow-md px-10">
      <h1 className="font-krona text-2xl">UARK</h1>
      <div className="flex justify-center items-center gap-3 font-noto">
        <Link
          to="/"
          className={`px-6 py-2 hover:bg-neutral-light rounded-full ${isActive("/") ? "bg-primary-blue text-white shadow-md hover:bg-primary-blue hover:text-white hover:shadow-md" : ""}`}
        >
          首頁
        </Link>
        <Link
          to="/operation"
          className={`px-6 py-2 hover:bg-neutral-light rounded-full ${isActive("/operation") ? "bg-primary-blue text-white shadow-md hover:bg-primary-blue hover:text-white hover:shadow-md" : ""}`}
        >
          營運
        </Link>
        <Link
          to="/nursing"
          className={`px-6 py-2 hover:bg-neutral-light rounded-full ${isActive("/nursing") ? "bg-primary-blue text-white shadow-md hover:bg-primary-blue hover:text-white hover:shadow-md" : ""}`}
        >
          照護
        </Link>
      </div>
      <div>notice, user</div>
    </nav>
  );
};

export default Navbar;
