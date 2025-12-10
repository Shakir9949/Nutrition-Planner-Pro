import Link from 'next/link';
import { useRouter } from 'next/router';
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
        <Link href="/" className={linkClass('/')}>Home</Link>
        <Link href="/profile" className={linkClass('/profile')}>Profile</Link>
        <Link href="/planner" className={linkClass('/planner')}>Planner</Link>
        <Link href="/recipe" className={linkClass('/recipe')}>Recipes</Link>
        <Link href="/progress" className={linkClass('/progress')}>Progress</Link>
      </div>
    </nav>
  );
};

export default Navbar;
