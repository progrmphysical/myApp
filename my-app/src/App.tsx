import Router from "./routes/Router";

import {
  AuthProvider,
} from "./context/AuthContext";

import {
  SeatProvider,
} from "./context/SeatContext";

function App() {
  return (
    <AuthProvider>
      <SeatProvider>
        <Router />
      </SeatProvider>
    </AuthProvider>
  );
}

export default App;