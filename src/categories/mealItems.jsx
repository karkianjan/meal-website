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
                setLoading(true);
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
            <h2 className="text-2xl font-bold mb-4 flex place-content-center">{meal.strMeal}</h2>
            <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer" className="text-blue-500 w-8 h-7">
                Watch on YouTube
            </a>
            <p className="mb-4  "><strong className='text-2xl font-bold flex place-content-center '>Steps:<br/></strong> {meal.strInstructions}</p>
            <p>{meal.ingredents}Ingredients</p>
        </div>
    );
};

export default MealDetail;