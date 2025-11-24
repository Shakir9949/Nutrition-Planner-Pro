import Link from 'next/link';
import '../styles/Navbar.module.css'; // updated path
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
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
