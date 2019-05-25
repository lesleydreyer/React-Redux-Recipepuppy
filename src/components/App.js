import React from 'react';
import SearchRecipes from '../components/SearchRecipes';
import RecipeList from '../components/RecipeList';
import '../styles/index.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Recipe Finder</h2>
                <SearchRecipes />
                <RecipeList />
            </div>
        )
    }
}


export default App;