import { Link } from "react-router-dom";
import "./QuickMenu.css";

export default function QuickMenu() {
  return (
    <div className="quick-menu">

      <Link to="/seat">
        좌석 예약
      </Link>

      <Link to="/mypage">
        마이페이지
      </Link>

      <Link to="/admin">
        관리자
      </Link>

    </div>
  );
}