// pages/index.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1>Welcome to Nutrition Planner Pro</h1>
        <p>Your personalized meal planner and nutrition tracker.</p>
      </main>
      <Footer />
    </div>
  );
}
