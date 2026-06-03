import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import "./Header.css";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">StudySeat</Link>
      </div>

      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/seat">Seats</Link>
        <Link to="/mypage">My Page</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      <div className="header__user">
        {user ? (
          <>
            <span className="user-name">
              {user.name}
            </span>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}