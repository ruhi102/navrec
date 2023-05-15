import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';


function ViewRecipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRecipe = async () => {
      const API_KEY = `https://api.spoonacular.com/recipes/${id}/information?apiKey=9c1c493eb73741d9adf01c61f3d5aa21&instructionsRequired=true`;
      const response = await fetch(API_KEY);
      const data = await response.json();
      console.log(data);
      setRecipe(data);
    };
    getRecipe();
  }, [id]);

  return (
    <div>
      {recipe && (
        <div>
          <h1>{recipe.title}</h1>
          <img src={recipe.image} alt={recipe.title} />
          <p>{recipe.summary}</p>
          <p>{recipe.instructions}</p>
          <p>{recipe.ingredients}</p>
          <Link to={`/saverecipe/${id}`}> 
      <button className="card__btn">View Recipe</button>
    </Link>
        </div>
      )}
    </div>
  );
}

export default ViewRecipe;

