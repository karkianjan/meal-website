import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { filterMealsByCategory } from '../services/api';
import { useNavigate } from 'react-router-dom';




const CategoryDetail = () => {
    const { categoryName } = useParams();
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

     const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await filterMealsByCategory(categoryName );
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
            <h2 className="text-xl my-3 font-bold border border-xl  bg-gray-300 w-24 h-12 place-content-center text-center " >
                <button onClick={handleBack} className=''>Go Back</button>
            </h2>
            <div className="grid md:grid-cols-6 gap-5">
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