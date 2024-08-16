
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { lookupMealById } from '../services/api';

const MealDetail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await lookupMealById(id);
        const meal = response.data.meals ? response.data.meals[0] : null;
        if (meal) {
          setMeal(meal);
        } else {
          setError('No meal found');
        }
      } catch (error) {
        setError('Error fetching item');
        console.error('Error fetching item:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {meal ? (
        <>
          <h1>{meal.strMeal}</h1>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>{meal.strInstructions}</p>
        </>
      ) : (
        <div>No details available</div>
      )}
    </div>
  );
};

export default MealDetail;