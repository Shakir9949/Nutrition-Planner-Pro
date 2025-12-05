// Components/Navbar.tsx
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={router.pathname === "/" ? styles.active : ""}>
        Home
      </Link>
      <Link
        href="/planner"
        className={router.pathname === "/planner" ? styles.active : ""}
      >
        Planner
      </Link>
      <Link
        href="/profile"
        className={router.pathname === "/profile" ? styles.active : ""}
      >
        Profile
      </Link>
    </nav>
  );
}
