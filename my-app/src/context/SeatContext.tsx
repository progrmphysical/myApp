import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import type { ReactNode } from "react";
import type { Seat } from "../types/Seat";

interface SeatContextType {
  seats: Seat[];
  reserveSeat: (
    seatId: number,
    userId: string
  ) => void;
}

const SeatContext =
  createContext<SeatContextType | null>(
    null
  );

const initialSeats: Seat[] = [
  { id: 1, seatNumber: "A1", status: "AVAILABLE" },
  { id: 2, seatNumber: "A2", status: "AVAILABLE" },
  { id: 3, seatNumber: "A3", status: "AVAILABLE" },
  { id: 4, seatNumber: "A4", status: "AVAILABLE" },
  { id: 5, seatNumber: "A5", status: "AVAILABLE" },
  { id: 6, seatNumber: "A6", status: "AVAILABLE" },
  { id: 7, seatNumber: "A7", status: "AVAILABLE" },
  { id: 8, seatNumber: "A8", status: "AVAILABLE" },
  { id: 9, seatNumber: "B1", status: "AVAILABLE" },
  { id: 10, seatNumber: "B2", status: "AVAILABLE" },
  { id: 11, seatNumber: "B3", status: "AVAILABLE" },
  { id: 12, seatNumber: "B4", status: "AVAILABLE" },
  { id: 13, seatNumber: "B5", status: "AVAILABLE" },
  { id: 14, seatNumber: "B6", status: "AVAILABLE" },
  { id: 15, seatNumber: "B7", status: "AVAILABLE" },
  { id: 16, seatNumber: "B8", status: "AVAILABLE" },
  { id: 17, seatNumber: "C1", status: "AVAILABLE" },
  { id: 18, seatNumber: "C2", status: "AVAILABLE" },
  { id: 19, seatNumber: "C3", status: "AVAILABLE" },
  { id: 20, seatNumber: "C4", status: "AVAILABLE" },
  { id: 21, seatNumber: "C5", status: "AVAILABLE" },
  { id: 22, seatNumber: "C6", status: "AVAILABLE" },
  { id: 23, seatNumber: "C7", status: "AVAILABLE" },
  { id: 24, seatNumber: "C8", status: "AVAILABLE" },
];

interface Props {
  children: ReactNode;
}

export function SeatProvider({
  children,
}: Props) {
  // 💡 [수정] 새로고침해도 데이터를 유지하도록 localStorage 초기화 로직 복구
  const [seats, setSeats] = useState<Seat[]>(() => {
    const saved = localStorage.getItem("seats");
    return saved ? JSON.parse(saved) : initialSeats;
  });

  // 💡 [개선] seats 상태가 바뀔 때마다 자동으로 localStorage에 동기화
  useEffect(() => {
    localStorage.setItem("seats", JSON.stringify(seats));
  }, [seats]);

  // 좌석 예약 함수
  const reserveSeat = (
    seatId: number,
    userId: string
  ) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) => {
        // 기존 예약 좌석 해제
        if (seat.reservedBy === userId) {
          return {
            ...seat,
            status: "AVAILABLE" as const,
            reservedBy: undefined,
            reservedAt: undefined, // 💡 시간 기록 초기화
            remainingTime: undefined,
          };
        }

        // 새 좌석 예약
        if (seat.id === seatId) {
          return {
            ...seat,
            status: "RESERVED" as const,
            reservedBy: userId,
            reservedAt: Date.now(), // 💡 [핵심] 예약한 시점의 타임스탬프 기록
            remainingTime: 60,
          };
        }

        return seat;
      })
    );
  };

  // 💡 [버그 수정] 타이머 동작 시 '현재 시간 - 예약 시간'을 계산하여 타이머 조작 방어
  useEffect(() => {
    const timer = setInterval(() => {
      setSeats((prevSeats) => {
        let hasChanged = false;

        const updated = prevSeats.map((seat) => {
          if (seat.status === "RESERVED" && seat.reservedAt) {
            // 지나간 시간(초) = (현재 시간 - 예약 시간) / 1000
            const elapsed = Math.floor((Date.now() - seat.reservedAt) / 1000);
            // 남은 시간 계산 (최하 0초)
            const remaining = Math.max(60 - elapsed, 0);

            // 60초가 지나 타임아웃된 경우 자동 만료
            if (remaining === 0) {
              hasChanged = true;
              return {
                ...seat,
                status: "AVAILABLE" as const,
                reservedBy: undefined,
                reservedAt: undefined,
                remainingTime: undefined,
              };
            }

            // 매초 화면의 숫자를 갱신해 주어야 할 때
            if (seat.remainingTime !== remaining) {
              hasChanged = true;
              return {
                ...seat,
                remainingTime: remaining,
              };
            }
          }
          return seat;
        });

        // 변경 사항이 생겼을 때만 상태를 업데이트하여 불필요한 렌더링 방지
        return hasChanged ? updated : prevSeats;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <SeatContext.Provider
      value={{
        seats,
        reserveSeat,
      }}
    >
      {children}
    </SeatContext.Provider>
  );
}

export function useSeat() {
  const context = useContext(SeatContext);

  if (!context) {
    throw new Error(
      "SeatProvider 안에서 사용하세요"
    );
  }

  return context;
}