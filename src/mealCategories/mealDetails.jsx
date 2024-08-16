import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { filterMealsByCategory } from '../services/api';

const CategoryDetail = () => {
    const { categoryName } = useParams();
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await filterMealsByCategory(categoryName);
                setMeals(response.data.meals || []);
            } catch (error) {
                setError('Error fetching meals');
                console.error('Error fetching meals:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMeals();
    }, [categoryName]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="px-2 mx-6 my-4">
            <h2 className="text-xl font-bold mb-4">{categoryName} Meals</h2>
            <div className="grid md:grid-cols-4 gap-5">
                {meals.map((meal) => (
                    <div key={meal.idMeal} className="flex flex-col items-center max-w-sm rounded overflow-hidden shadow-md shadow-gray-600 transition-transform duration-300 ease-in-out hover:scale-105 my-2 mx-2">
                        <Link to={`/meal/${meal.idMeal}`}>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                            <h3 className="grid place-items-center py-4 font-normal text-sm">
                                {meal.strMeal}
                            </h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryDetail;