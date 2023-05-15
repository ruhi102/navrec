import React, { useEffect, useState } from "react";
import "./rec.css";
import { Link } from 'react-router-dom';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const API_KEY =
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=9c1c493eb73741d9adf01c61f3d5aa21&query=italian&number=19&instructionsRequired=true";
      const response = await fetch(API_KEY);
      const data = await response.json();
      console.log(data);
      setRecipes(data.results);
    };
    getRecipes();
  }, []);

  return (
    <div className="wrapper">
      {recipes && recipes.map((recipe) => (
        <Card
          key={recipe.id}
          img={recipe.image}
          title={recipe.title}
          id={recipe.id}
        />
      ))}
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} alt={props.title} className="card__image" />
        <h2 className="card__title">{props.title}</h2>
      </div>
      <Link to={`/viewrecipe/${props.id}`}> 
      <button className="card__btn">View Recipe</button>
    </Link>
    </div>
  );
}

export default App;
