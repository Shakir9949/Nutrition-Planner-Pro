import Link from 'next/link';
import { useRouter } from 'next/router';
import '../styles/Navbar.module.css'; // updated path
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const router = useRouter();

  const linkClass = (path: string) => {
    return router.pathname === path ? styles.activeLink : '';
  };

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Nutrition Planner Pro</h1>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/planner">Planner</Link>
      </div>
    </nav>
  );
};

export default Navbar;
