import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { lookupMealById } from '../services/api';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

const MealDetail = () => {
    const { mealId } = useParams();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

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

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        if (ingredient) {
            ingredients.push(ingredient);
        }
    }

    return (
        <div>
        <h2 className="text-xl font-bold mx-8 border border-xl my-5 bg-gray-300 w-24 h-12 place-content-center text-center  " >
        <button onClick={handleBack}>Go Back</button>
        </h2>
        <div className="mx-7  rounded-lg border overflow-hidden shadow-gray-600 shadow-md">
            {meal.strYoutube && (
                <div className="player-wrapper">
                    <ReactPlayer
                        className="react-player"
                        url={meal.strYoutube}
                        width="100%"
                        controls={true}
                    />
                </div>
            )}
           
            <p className="mb-4 px-5">
                <strong className='text-2xl font-bold flex place-content-center py-10'>Steps:<br/></strong> 
                {meal.strInstructions}
            </p>

            <p className='flex place-content-center font-bold text-2xl py-6'>Ingredients:</p>
            <ul className=" grid md:grid-cols-3 px-96 gap-x-20   ">
                {ingredients.map((ingredient, index) => (
                    <p key={index} className="text-xl  font-semibold border rounded-lg text-white bg-gray-400 mb-2 p-2 flex justify-center">
                        {ingredient}
                    </p>
                ))}
            </ul>
        </div>
        </div>
    );

};

export default MealDetail;