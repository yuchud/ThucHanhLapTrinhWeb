"use client";

import { useState } from "react";
import registerStyles from "./../login/login.module.css";
import pageStyles from "./../page.module.css";
import Link from "next/link";

import NavBar from "../component/NavBar";
import Footer from "../component/Footer";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp. Vui lòng kiểm tra lại.");
      return;
    }
    alert(`Đăng ký với tên đăng nhập: ${username}, mật khẩu: ${password}`);
  };
  return (
    <div className={pageStyles.container}>
      <NavBar /> {/* Reusable navigation */}
      <main className={pageStyles.main}>
        <form className={registerStyles.loginForm} onSubmit={handleSubmit}>
          <h2>Đăng ký</h2>
          <div className={registerStyles.formGroup}>
            <label>Tên đăng nhập:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={registerStyles.formGroup}>
            <label>Mật khẩu:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={registerStyles.formGroup}>
            <label>Nhập lại mật khẩu:</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={registerStyles.loginButton}>
            Đăng ký
          </button>
          <nav>
            <Link className={registerStyles.link} href="/login">
              Đăng nhập
            </Link>
          </nav>
        </form>
      </main>
      <Footer /> {/* Reusable footer */}
    </div>
  );
}
