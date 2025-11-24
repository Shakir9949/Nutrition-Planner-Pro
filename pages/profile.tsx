import '../styles/Profile.module.css';
import styles from '../styles/Profile.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useUser } from '../context/UserContext';
import { useState, useEffect } from 'react';

export default function Profile() {
  const { user, setUser } = useUser();
  const [age, setAge] = useState(user.age);
  const [weight, setWeight] = useState(user.weight);
  const [height, setHeight] = useState(user.height);
  const [activity, setActivity] = useState(user.activity);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({ age, weight, height, activity });
    alert('Profile updated!');
  };

  useEffect(() => {
    setAge(user.age);
    setWeight(user.weight);
    setHeight(user.height);
    setActivity(user.activity);
  }, [user]);

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <h2>User Profile</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
          <input placeholder="Weight (kg)" value={weight} onChange={e => setWeight(e.target.value)} />
          <input placeholder="Height (cm)" value={height} onChange={e => setHeight(e.target.value)} />
          <input placeholder="Activity Level" value={activity} onChange={e => setActivity(e.target.value)} />
          <button type="submit" className={styles.primaryButton}>Save</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
