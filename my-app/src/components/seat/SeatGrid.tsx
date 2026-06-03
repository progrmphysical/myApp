import SeatCard from "./SeatCard";
import type { Seat } from "../../types/Seat";
import "./SeatGrid.css";

interface SeatGridProps {
  seats: Seat[];
  onSelect: (seatId: number) => void;
}

export default function SeatGrid({
  seats,
  onSelect,
}: SeatGridProps) {
  return (
    <div className="seat-grid">
      {seats.map((seat) => (
        <SeatCard
          key={seat.id}
          seat={seat}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}