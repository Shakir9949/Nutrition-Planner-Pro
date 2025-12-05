// pages/profile.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Profile.module.css";
import { useUserContext } from "../context/UserContext";

export default function Profile() {
  const { user } = useUserContext();

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1>Profile</h1>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Height: {user.heightCm} cm</p>
        <p>Weight: {user.weightKg} kg</p>
        <p>Goals: {user.goals}</p>
      </main>
      <Footer />
    </div>
  );
}
