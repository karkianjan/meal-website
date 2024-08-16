import React, {useEffect, useState} from "react";
import { listMealCategories } from "../services/api";

const MealCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try{
                const response = await listMealCategories();
                setCategories(response.data.categories || []);
            }catch (error){
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories ();
    }, []);

    return(

        <div className="px-2  mx-6 my-4 ">
            <div className="grid md:grid-cols-6  gap-5">
                     {categories.map((category) => (
                   <div className="flex flex-col items-center max-w-sm rounded overflow-hidden shadow-md shadow-gray-600 transition-transform duration-300 ease-in-out hover:scale-105 my-2 mx-2">

                    <div key={category.idCategory}>
                    <img src={category.strCategoryThumb} alt={category.strCategory} />
                    <h3 className="grid place-items-center py-4 font-normal text-sm ">{category.strCategory}</h3>
                    </div>
                     </div>
                     ))}
               
             </div>

        </div>
    )
}

export default MealCategories;