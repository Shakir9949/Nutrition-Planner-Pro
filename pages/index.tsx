import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h2>Welcome to Nutrition Planner Pro</h2>
        <p>Plan your meals and track your nutrition easily!</p>
      </main>
      <Footer />
    </div>
  );
}