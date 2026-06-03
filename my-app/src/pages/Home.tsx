import Layout from "../components/common/Layout";

import HeroSection from "../components/dashboard/HeroSection";

import StatsCard from "../components/dashboard/StatsCard";

import QuickMenu from "../components/dashboard/QuickMenu";

import "./Home.css";

import { useSeat } from "../context/SeatContext";


export default function Home() {

  //const totalSeats = 120;
 // const reservedSeats = 53;
  //const availableSeats =
  //  totalSeats - reservedSeats;

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

      <HeroSection />

      <div className="stats-grid">

        <StatsCard
          title="전체 좌석"
          value={totalSeats}
        />

        <StatsCard
          title="사용 중"
          value={reservedSeats}
        />

        <StatsCard
          title="여유 좌석"
          value={availableSeats}
        />

      </div>

      <QuickMenu />

    </Layout>
  );
}