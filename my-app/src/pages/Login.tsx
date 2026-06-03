import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/common/Layout";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] =
    useState("");

  const handleLogin = () => {
    const success = login(
      id,
      password
    );

    if (success) {
      alert("로그인 성공");

      navigate("/");
    } else {
      alert(
        "아이디 또는 비밀번호가 틀렸습니다."
      );
    }
  };

  return (
    <Layout>
      <div
        style={{
          maxWidth: "400px",
          margin: "50px auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "16px",
          boxShadow:
            "0 10px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h1>Login</h1>

        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) =>
            setId(e.target.value)
          }
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            background: "#6d28d9",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        <p
          style={{
            marginTop: "15px",
            color: "#666",
          }}
        >
          테스트 계정
          <br />
          ID : admin
          <br />
          PW : 1234
        </p>
      </div>
    </Layout>
  );
}