import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MealCategories from "./mealCategories/mealCategories";

function App() {
  return (
    <div>
      <router>
        <routes>
          <route path="./category/:id" element={<MealCategories />} />
        </routes>
      </router>
    </div>
  );
}

export default App;
