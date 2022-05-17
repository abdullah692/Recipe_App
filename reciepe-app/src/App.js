import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';

function App() {
  const APP_ID = 'bb37c52c'
  const APP_KEY = 'b6868f2f24f5f4c9a3f0adbd4905d25a'

  const [recipe, setRecipe] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('mango')
  useEffect(() => {
    api()
    setSearch('')
  }, [query])


  const api = async () => {
    const RecipeGet = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
    const data = await RecipeGet.json()
    setRecipe(data.hits)
    console.log(data.hits)

  }
  const heading = {
    textAlign: 'center', fontSize: '30px', color: 'white', fontFamily: 'sans-serif'
    , margin: '20px'
  }


  const handleChange = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div className="App">
      <h2 style={heading}>Recipe App</h2>
      <form className='search-form' onSubmit={handleSubmit}>
        <input className='search-bar' type='text' value={search} onChange={handleChange}></input>
        <button className='search-button' type='submit'>Search</button>
      </form>
      <div className='recipes'>
        {
          recipe.map(recipes => (

            <Recipe title={recipes.recipe.label}
              calories={recipes.recipe.calories}
              image={recipes.recipe.image}
              ingredients={recipes.recipe.ingredients}
            />

          ))
        }
      </div>

    </div>
  );
}

export default App;
