import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MealCategories from "./categories/mealCategories";
import CategoryDetail from "./categories/categoryDetails";
import MealDetail from "./categories/mealDetailed";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MealCategories />} />
          <Route path="/category/:categoryName" element={<CategoryDetail />} />
          <Route path="/meal/:mealId" element={<MealDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
