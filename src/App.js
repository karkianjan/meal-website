import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MealCategories from "./categories/mealCategories";
import CategoryDetail from "./categories/mealDetails";

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
