// components/Recipe.tsx
import { useUser, Recipe as RecipeType } from "../context/UserContext";
import { useState } from "react";
import styles from "../styles/Recipe.module.css";

export default function Recipe() {
  const { user, addRecipe, removeRecipe } = useUser();
  const [recipeName, setRecipeName] = useState("");
  const [diet, setDiet] = useState("");

  const handleAdd = () => {
    if (!recipeName || !diet) return;
    const newRecipe: RecipeType = { id: Date.now().toString(), name: recipeName, diet };
    addRecipe(newRecipe);
    setRecipeName("");
    setDiet("");
  };

  return (
    <div className={styles.container}>
      <h3>Recipe Suggestions</h3>
      <div className={styles.form}>
        <input placeholder="Recipe Name" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
        <input placeholder="Diet Type (e.g., Vegan)" value={diet} onChange={(e) => setDiet(e.target.value)} />
        <button onClick={handleAdd} className={styles.primaryButton}>Add Recipe</button>
      </div>

      <div className={styles.list}>
        {user.recipes && user.recipes.length > 0 ? (
          user.recipes.map((r) => (
            <div key={r.id} className={styles.recipeCard}>
              <span>{r.name} ({r.diet})</span>
              <button onClick={() => removeRecipe(r.id)}>Remove</button>
            </div>
          ))
        ) : <p>No recipes yet.</p>}
      </div>
    </div>
  );
}
