import "./SeatStatus.css";
import type { Seat } from "../../types/Seat";

interface SeatStatusProps {
  seats: Seat[];
}

export default function SeatStatus({
  seats,
}: SeatStatusProps) {

  const total =
    seats.length;

  const reserved =
    seats.filter(
      seat =>
        seat.status ===
        "RESERVED"
    ).length;

  const available =
    total - reserved;

  return (
    <div className="seat-status">

      <div>
        <h4>Total</h4>
        <p>{total}</p>
      </div>

      <div>
        <h4>Available</h4>
        <p>{available}</p>
      </div>

      <div>
        <h4>Reserved</h4>
        <p>{reserved}</p>
      </div>

    </div>
  );
}