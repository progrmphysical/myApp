export interface Seat {
  id: number;
  seatNumber: string;

  status:
    | "AVAILABLE"
    | "RESERVED";

  reservedBy?: string;
reservedAt?: number;    // 💡 Date.now() 값이 들어갈 공간 (밀리초 타임스탬프)
  remainingTime?: number;
}