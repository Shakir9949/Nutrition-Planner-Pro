// components/Recipe.tsx
import { useUser, Recipe as RecipeType } from "../context/UserContext";
import { useState } from "react";
import styles from "../styles/Recipe.module.css";

export default function Recipe() {
  const { user, setUser } = useUser();

  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const addRecipe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    const newRecipe: RecipeType = {
      id: Date.now().toString(),
      name,
      ingredients: ingredients.split(",").map(i => i.trim()),
      instructions,
    };

    setUser({
      ...user,
      recipes: [...(user.recipes || []), newRecipe],
    });

    setName("");
    setIngredients("");
    setInstructions("");
  };

  const removeRecipe = (id: string) => {
    setUser({
      ...user,
      recipes: user.recipes?.filter(r => r.id !== id),
    });
  };

  return (
    <div className={styles.page}>
      <h2>Recipe Manager</h2>

      <div className={styles.addRecipeForm}>
        <form onSubmit={addRecipe} className={styles.form}>
          <input
            type="text"
            placeholder="Recipe Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Ingredients (comma separated)"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          <textarea
            placeholder="Instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
          <button type="submit" className={styles.primaryButton}>Add Recipe</button>
        </form>
      </div>

      <div className={styles.recipeList}>
        {user.recipes && user.recipes.length > 0 ? (
          user.recipes.map((recipe) => (
            <div key={recipe.id} className={styles.card}>
              <h3>{recipe.name}</h3>
              <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
              <p><strong>Instructions:</strong> {recipe.instructions}</p>
              <button className={styles.removeButton} onClick={() => removeRecipe(recipe.id)}>
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>No recipes added yet.</p>
        )}
      </div>
    </div>
  );
}
