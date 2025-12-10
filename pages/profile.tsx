import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Profile.module.css";
import { useUser } from "../context/UserContext";
import { useState } from "react";

export default function Profile() {
  const { user, setUser } = useUser();

  const [age, setAge] = useState(user.age || "");
  const [height, setHeight] = useState(user.height || "");
  const [weight, setWeight] = useState(user.weight || "");
  const [activity, setActivity] = useState(user.activity || "");

  const handleSave = () => {
    setUser({
      age,
      height,
      weight,
      activity,
    });
  };

  const handleClear = () => {
    setAge("");
    setHeight("");
    setWeight("");
    setActivity("");

    setUser({
      age: "",
      height: "",
      weight: "",
      activity: "",
    });
  };

  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        <h1>Profile</h1>

        <div className={styles.form}>
          <label>Age:</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <label>Height:</label>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <label>Weight:</label>
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <label>Activity:</label>
          <input
            type="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />

          {/* Buttons container */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1.5rem",
            }}
          >
            <button onClick={handleClear} style={{ flex: "1", marginRight: "1rem" }}>
              Clear
            </button>
            <button onClick={handleSave} style={{ flex: "1", marginLeft: "1rem" }}>
              Save
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
