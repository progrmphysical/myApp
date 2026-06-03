import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import SeatPage from "../pages/SeatPage";
import MyPage from "../pages/MyPage";
import AdminPage from "../pages/AdminPage";
import NotFound from "../pages/NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/seat"
          element={<SeatPage />}
        />

        <Route
          path="/mypage"
          element={<MyPage />}
        />

        <Route
          path="/admin"
          element={<AdminPage />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}