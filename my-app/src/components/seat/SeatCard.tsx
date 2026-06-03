import "./SeatCard.css";
import type { Seat } from "../../types/Seat";

interface Props {
  seat: Seat;
  onSelect: (seatId: number) => void;
}

export default function SeatCard({
  seat,
  onSelect,
}: Props) {
  return (
    <button
      className={`seat-card ${seat.status.toLowerCase()}`}
      onClick={() => onSelect(seat.id)}
    >
      <div className="seat-number">
        {seat.seatNumber}
      </div>

      <div className="seat-state">

  {seat.status}

  {seat.remainingTime &&
    ` (${seat.remainingTime}s)`}

</div>
    </button>
  );
}