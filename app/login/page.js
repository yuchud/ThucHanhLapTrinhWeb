"use client";

import { useState } from "react";
import loginStyles from "./login.module.css";
import pageStyles from "./../page.module.css";
import Link from "next/link";

import NavBar from "../component/NavBar";
import Footer from "../component/Footer";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Đăng nhập với tên đăng nhập: ${username}, mật khẩu: ${password}`);
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
