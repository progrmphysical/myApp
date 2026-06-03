import Layout from "../components/common/Layout";

import { useAuth } from "../context/AuthContext";
import { useSeat } from "../context/SeatContext";

export default function MyPage() {

  const { user } = useAuth();
  const { seats } = useSeat();

  const mySeat = seats.find(
    seat => seat.reservedBy === user?.id
  );

  return (
    <Layout>

      <h1>My Reservation</h1>

      {!user ? (

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "16px",
          }}
        >
          <h3>로그인이 필요합니다.</h3>
        </div>

      ) : (

        <div
          style={{
            background: "#fff",
            padding: "24px",
            borderRadius: "16px",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.08)",
            marginTop: "20px",
          }}
        >

          <h2>{user.name}</h2>

          {mySeat ? (
            <>
              <p>
                <strong>예약 좌석 :</strong>{" "}
                {mySeat.seatNumber}
              </p>

              <p>
                <strong>상태 :</strong>{" "}
                {mySeat.status}
              </p>

              <p>
                <strong>남은 시간 :</strong>{" "}
                {mySeat.remainingTime ?? 0}초
              </p>
            </>
          ) : (
            <p>
              현재 예약된 좌석이 없습니다.
            </p>
          )}

        </div>

      )}

    </Layout>
  );
}