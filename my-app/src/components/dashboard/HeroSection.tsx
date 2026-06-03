import { Link } from "react-router-dom";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">

      <h1>
        Smart Library Reservation
      </h1>

      <p>
        실시간 좌석 예약 및 이용 현황 확인
      </p>

      <div className="hero-buttons">
        <Link to="/seat">
          예약하기
        </Link>

        <Link to="/mypage">
          내 예약 보기
        </Link>
      </div>

    </section>
  );
}