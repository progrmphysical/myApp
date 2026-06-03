import Layout from "../components/common/Layout";

import { useSeat } from "../context/SeatContext";

export default function AdminPage() {

  const { seats } = useSeat();

  const totalSeats = seats.length;

  const reservedSeats =
    seats.filter(
      seat => seat.status === "RESERVED"
    ).length;

  const availableSeats =
    totalSeats - reservedSeats;

  return (
    <Layout>

      <h1>Admin Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "16px",
          }}
        >
          <h3>Total Seats</h3>
          <h2>{totalSeats}</h2>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "16px",
          }}
        >
          <h3>Available</h3>
          <h2>{availableSeats}</h2>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "16px",
          }}
        >
          <h3>Reserved</h3>
          <h2>{reservedSeats}</h2>
        </div>

      </div>

      <div
        style={{
          background: "#fff",
          marginTop: "30px",
          borderRadius: "16px",
          padding: "20px",
        }}
      >

        <h2>Seat Status</h2>

        <table
          style={{
            width: "100%",
            borderCollapse:
              "collapse",
          }}
        >
          <thead>
            <tr>
              <th>Seat</th>
              <th>Status</th>
              <th>User</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>

            {seats.map(seat => (

              <tr
                key={seat.id}
              >
                <td>
                  {seat.seatNumber}
                </td>

                <td>
                  {seat.status}
                </td>

                <td>
                  {seat.reservedBy ??
                    "-"}
                </td>

                <td>
                  {seat.remainingTime ??
                    "-"}
                </td>
              </tr>

            ))}

          </tbody>
        </table>

      </div>

    </Layout>
  );
}