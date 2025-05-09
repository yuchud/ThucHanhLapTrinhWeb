"use client";

import { useState } from "react";
import loginStyles from "./login.module.css";
import pageStyles from "./../page.module.css";
import Link from "next/link";

import NavBar from "../component/NavBar";
import Footer from "../component/Footer";

const apiAdress = "http://localhost:8081";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    const response = await fetch(apiAdress + "/login", {
      method: "POST",
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Accept": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      alert(`Đăng nhập với tên đăng nhập: ${username}, mật khẩu: ${password}`);
    } else {
      console.log("Đăng nhập thất bại");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };
  return (
    <div className={pageStyles.container}>
      <NavBar /> {/* Reusable navigation */}
      <main className={pageStyles.main}>
        <form className={loginStyles.loginForm} onSubmit={handleSubmit}>
          <h2>Đăng nhập</h2>
          <div className={loginStyles.formGroup}>
            <label>Tên đăng nhập:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={loginStyles.formGroup}>
            <label>Mật khẩu:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={loginStyles.loginButton}>
            Đăng nhập
          </button>
          <nav>
            <Link className={loginStyles.link} href="/register">
              Đăng ký
            </Link>
          </nav>
        </form>
      </main>
      <Footer /> {/* Reusable footer */}
    </div>
  );
}
