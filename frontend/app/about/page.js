import Link from "next/link";
import NavBar from "../component/NavBar";
import styles from "./../page.module.css";
import Footer from "../component/Footer";
export default function About() {
  return (
    <div className={styles.container}>
      <NavBar /> {/* Reusable navigation */}
      <main className={styles.main}>
        <h1>Giới thiệu</h1>
        <p>Đây là trang giới thiệu của ứng dụng</p>
      </main>
      <Footer /> {/* Reusable footer */}
    </div>
  );
}
