import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RecipeItem from './RecipeItem';

class FavoriteRecipeList extends React.Component {
    render() {
        return (
            <div>
                <h4 className="link"><Link to='/'>Home</Link></h4>
                <h4>Favorite Recipes</h4>
                {
                    this.props.favoriteRecipe.map((recipe, index) => {
                        return (
                            <RecipeItem key={index} recipe={recipe} favoriteButton={false} />
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        favoriteRecipe: state.favoriteRecipe
    }
}

export default connect(mapStateToProps, null)(FavoriteRecipeList);