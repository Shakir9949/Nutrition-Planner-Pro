// pages/recipe.tsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Recipe.module.css";
import { useUser, Recipe as RecipeType } from "../context/UserContext";

export default function RecipePage() {
  const { user, addRecipe, removeRecipe } = useUser();
  const [name, setName] = useState("");
  const [diet, setDiet] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    // Create a recipe object including all required fields
    const recipe: RecipeType = {
      id: Date.now().toString(),
      name,
      diet,
      ingredients: [],      // default empty array
      instructions: "",     // default empty string
    };

    addRecipe(recipe);
    setName("");
    setDiet("");
  };

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <h2>Recipe Suggestions</h2>

        <div className={styles.recipeList}>
          {user.recipes && user.recipes.length > 0 ? (
            user.recipes.map((r) => (
              <div key={r.id} className={styles.recipeCard}>
                <h4>{r.name}</h4>
                <p>Diet: {r.diet}</p>
                <button onClick={() => removeRecipe(r.id)}>Remove</button>
              </div>
            ))
          ) : (
            <p>No recipes yet.</p>
          )}
        </div>

        <div className={styles.addRecipeForm}>
          <h3>Add Recipe</h3>
          <form onSubmit={handleAdd} className={styles.form}>
            <input
              type="text"
              placeholder="Recipe Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Diet (e.g., Vegan)"
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
            />
            <button type="submit" className={styles.primaryButton}>
              Add Recipe
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
