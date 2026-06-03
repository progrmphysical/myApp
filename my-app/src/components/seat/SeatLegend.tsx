import "./SeatLegend.css";

export default function SeatLegend() {
  return (
    <div className="legend">

      <div>
        <span
          className="box available"
        ></span>

        Available
      </div>

      <div>
        <span
          className="box reserved"
        ></span>

        Reserved
      </div>

    </div>
  );
}