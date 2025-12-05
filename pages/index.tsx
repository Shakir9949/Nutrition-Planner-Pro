import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h2>Welcome to Nutrition Planner Pro</h2>
        <p>Plan your meals and track your nutrition easily!</p>


        {/* Features Section */}
        <section className={styles.features}>
          <h3>Why Choose Nutrition Planner Pro?</h3>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              Personalized meal plans based on your profile
            </div>
            <div className={styles.featureCard}>
              Track calories, protein, carbs, and fats
            </div>
            <div className={styles.featureCard}>
              Discover healthy recipes tailored to your goals
            </div>
            <div className={styles.featureCard}>
              Monitor your progress with interactive charts
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}