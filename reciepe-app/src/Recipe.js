import React from 'react'
import './App.css';
function Recipe({title,calories,image,ingredients}) {

    
    return (
        <div className='Recipes'>
            <h3>Title : {title}</h3>
            <p>Calories : {calories}</p>
            <ol >
                Ingredients: 
               {ingredients.map(value=>(
                  
<li>{value.text}</li>
               ))
}
            </ol>
            <img className='image'src={image} alt=''></img>
        </div>
    )
}

export default Recipe
