import Link from "next/link";
import styles from "./../page.module.css";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
export default function Contact() {
  return (
    <div className={styles.container}>
      <NavBar /> {/* Reusable navigation */}
      <main className={styles.main}>
        <h1>Liên hệ</h1>
        <p>Đây là trang liên hệ của ứng dụng</p>
        <p>Tác giả: Nguyễn Đức Huy</p>
        <p>Địa chỉ: 123 Đường ABC, Thành phố XYZ</p>
        <p>Điện thoại: 0123456789</p>
        <p>Email: n20dccn021@gmail.com</p>
      </main>
      <Footer /> {/* Reusable footer */}
    </div>
  );
}
