// Context/UserContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from "react";

// Types
export type UserProfile = {
  id: string;
  name: string;
  age?: number;
  heightCm?: number;
  weightKg?: number;
  activityLevel?: "low" | "moderate" | "high";
  goals?: string;
};

export type Meal = {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs?: number;
  fat?: number;
  date?: string;
};

// Context value type
type UserContextType = {
  user: UserProfile | null;
  meals: Meal[];
  setUser: (u: UserProfile | null) => void;
  loadUser: (id: string) => void;
  loadMeals: (userId: string) => void;
};

// Create context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [meals, setMeals] = useState<Meal[]>([]);

  // Load user data (placeholder for API)
  const loadUser = useCallback((id: string) => {
    // TODO: replace with actual API call
    const mockUser: UserProfile = {
      id,
      name: id === "1" ? "Example User" : `User ${id}`,
      age: 25,
      heightCm: 170,
      weightKg: 70,
      activityLevel: "moderate",
      goals: "Maintain weight",
    };
    setUser(mockUser);
  }, []);

  // Load meals for user (placeholder for API)
  const loadMeals = useCallback((userId: string) => {
    // TODO: replace with actual API call
    const mockMeals: Meal[] = [
      {
        id: "meal1",
        name: "Oatmeal + Fruits",
        calories: 320,
        protein: 14,
        carbs: 50,
        fat: 5,
        date: new Date().toISOString(),
      },
      {
        id: "meal2",
        name: "Grilled Chicken & Veggies",
        calories: 550,
        protein: 45,
        carbs: 25,
        fat: 22,
        date: new Date().toISOString(),
      },
    ];
    setMeals(mockMeals);
  }, []);

  // Optionally auto-load default user on mount
  useEffect(() => {
    loadUser("1");
    loadMeals("1");
  }, [loadUser, loadMeals]);

  return (
    <UserContext.Provider value={{ user, meals, setUser, loadUser, loadMeals }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook
export const useUserContext = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUserContext must be used within a UserProvider");
  return ctx;
};
