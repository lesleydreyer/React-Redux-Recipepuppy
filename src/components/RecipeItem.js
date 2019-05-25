import React from 'react';
import { connect } from 'react-redux';
import { favoriteRecipe, deleteFavoriteRecipe } from '../actions/index';

class RecipeItem extends React.Component {
    constructor() {
        super();
        this.state = {
            favorited: false
        }
    }

    favorite(recipe) {
        this.props.favoriteRecipe(recipe);
        this.setState({ favorited: true });
    }
    deleteFavorite(recipe) {
        this.props.deleteFavoriteRecipe(recipe);
        this.setState({ favorited: false });
        console.log('deletestate', this.state)
    }
    render() {
        let { recipe } = this.props;
        return (
            <div className='recipe-item'>
                {
                    this.props.favoriteButton ? //don't show star in favorite recipe list
                        this.state.favorited ? //show filled in star if already favorited
                            <div className='star'>&#9733;</div>
                            :
                            <div //show unfilled star with option to add as favorite
                                className='star'
                                onClick={() => this.favorite(recipe)}>
                                &#9734;
                            </div>
                        : <div onClick={() => this.deleteFavorite(recipe)} className='star'>
                            x
                        </div>//originally empty div instead of star if on favorite recipe list, added x to allow removal from favorite recipe list
                }
                <div className='recipe-text'>
                    <a href={recipe.href}>
                        <h4>{recipe.title}</h4>
                    </a>
                    <p>{recipe.ingredients}</p>
                </div>
                <img src={recipe.thumbnail} alt={recipe.title} className='recipe-image' />
            </div>
        )
    }
}

export default connect(null, { favoriteRecipe, deleteFavoriteRecipe })(RecipeItem);