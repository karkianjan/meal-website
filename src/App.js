import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MealCategories from "./mealCategories/mealCategories";
import CategoryDetail from "./mealCategories/mealDetails";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MealCategories />} />
          <Route path="/category/:categoryName" element={<CategoryDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
