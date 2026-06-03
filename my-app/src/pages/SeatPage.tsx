import { useNavigate } from "react-router-dom";

import Layout from "../components/common/Layout";

import SeatGrid from "../components/seat/SeatGrid";
import SeatStatus from "../components/seat/SeatStatus";
import SeatLegend from "../components/seat/SeatLegend";

import { useSeat } from "../context/SeatContext";
import { useAuth } from "../context/AuthContext";

export default function SeatPage() {

  const navigate = useNavigate();

  const { seats, reserveSeat } =
    useSeat();

  const { user } =
    useAuth();

  const handleSelect = (
    seatId: number
  ) => {

    if (!user) {

      alert(
        "로그인 후 이용해주세요."
      );

      navigate("/login");

      return;
    }

    reserveSeat(
      seatId,
      user.id
    );
  };

  return (
    <Layout>

      <h1>
        Seat Reservation
        <div
  style={{
    background: "#fff",
    padding: "20px",
    borderRadius: "16px",
    marginBottom: "20px",
    boxShadow:
      "0 4px 12px rgba(0,0,0,.08)"
  }}
>
  <h2>
    📚 Reading Room A
  </h2>

  <p>
    실시간 좌석 예약 현황
  </p>
</div>
      </h1>
<div
  style={{
    background: "#fff",
    padding: "20px",
    borderRadius: "16px",
    marginBottom: "20px",
    boxShadow:
      "0 4px 12px rgba(0,0,0,.08)"
  }}
>
  <h2>
    📚 Reading Room A
  </h2>

  <p>
    실시간 좌석 예약 현황
  </p>
</div>
      <SeatStatus
        seats={seats}
      />

      <SeatLegend />

      <SeatGrid
        seats={seats}
        onSelect={handleSelect}
      />

    </Layout>
  );
}