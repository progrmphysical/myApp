import "./ReservationTimer.css";

interface Props {
  seconds: number;
}

export default function ReservationTimer({
  seconds,
}: Props) {
  const minutes =
    Math.floor(seconds / 60);

  const remain =
    seconds % 60;

  return (
    <div className="reservation-timer">
      {minutes}:{remain.toString().padStart(2, "0")}
    </div>
  );
}