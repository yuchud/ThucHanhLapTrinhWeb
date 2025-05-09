import Link from "next/link";
import styles from "./nav-bar.module.css";
export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.navLink} href="/">
        Trang chủ
      </Link>
      <Link className={styles.navLink} href="/about">
        Giới thiệu
      </Link>
      <Link className={styles.navLink} href="/contact">
        Liên hệ
      </Link>
      <Link className={styles.navLink} href="/login">
        Đăng nhập
      </Link>
      <Link className={styles.navLink} href="/register">
        Đăng ký
      </Link>
    </nav>
  );
}
