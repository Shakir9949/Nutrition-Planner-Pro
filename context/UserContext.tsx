// context/UserContext.tsx
import { createContext, useState, ReactNode, useContext } from "react";

export type Meal = {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
};

export type ProgressEntry = {
  day: string; // ISO date string "YYYY-MM-DD"
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
};

export type User = {
  age: string;
  weight: string;
  height: string;
  activity: string;
  meals?: Meal[]; // optional meal list
  progress?: ProgressEntry[]; // optional progress list
};

type UserContextType = {
  user: User;
  setUser: (user: User) => void;
  addMeal: (meal: Meal) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({
    age: "",
    weight: "",
    height: "",
    activity: "",
    meals: [],
    progress: [], // initialize progress
  });

  // Function to add a new meal
  const addMeal = (meal: Meal) => {
    setUser((prev) => ({
      ...prev,
      meals: [...(prev.meals || []), meal],
    }));
  };

  return (
    <UserContext.Provider value={{ user, setUser, addMeal }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext easily
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
