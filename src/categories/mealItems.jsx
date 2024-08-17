import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { lookupMealById } from '../services/api';

const MealDetail = () => {
    const { mealId } = useParams();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMeal = async () => {
            try {
                const response = await lookupMealById(mealId);
                setMeal(response.data.meals[0]);
            } catch (error) {
                setError('Error fetching meal details');
                console.error('Error fetching meal details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMeal();
    }, [mealId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="px-4 mx-auto my-8 max-w-4xl">
            <h2 className="text-2xl font-bold mb-4">{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded mb-4" />
            <p className="mb-4"><strong>Category:</strong> {meal.strCategory}</p>
            <p className="mb-4"><strong>Area:</strong> {meal.strArea}</p>
            <p className="mb-4"><strong>Instructions:</strong> {meal.strInstructions}</p>
            <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                Watch on YouTube
            </a>
        </div>
    );
};

export default MealDetail;