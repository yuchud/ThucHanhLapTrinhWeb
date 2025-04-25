import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar /> {/* Reusable navigation */}
      <main className={styles.main}>
        <h1 className={styles.title}>Trang chủ</h1>
        <p>Đây là trang chủ của ứng dụng</p>
      </main>
      <Footer /> {/* Reusable footer */}
    </div>
  );
}
