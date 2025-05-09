"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";
const apiAdress = 'http://localhost:8081';

export default function Home() {
  // call api to get user data
  const [users, setUsers] = useState(null);
  const fetchUsers = async () => {
    console.log(apiAdress);
    const response = await fetch(apiAdress + "/users");
    const data = await response.json();
    console.log(data);
    setUsers(data);
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      <NavBar /> {/* Reusable navigation */}
      <main className={styles.main}>
        <h1 className={styles.title}>Trang chủ</h1>
        <h2>Danh sách người dùng ứng dụng</h2>
        <table className={styles.table}>
          <thead>
            <tr>
                <th>STT</th>
                <th className={styles.tableCell}>Tên</th>
                <th className={styles.tableCell}>Tuổi</th>

            </tr>
          </thead>
          <tbody>
            {users && users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </main>
      <Footer /> {/* Reusable footer */}
    </div>
  );
}
