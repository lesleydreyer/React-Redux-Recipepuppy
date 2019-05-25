import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RecipeItem from './RecipeItem';

class RecipesList extends React.Component {
    render() {
        console.log('reclistprops', this.props);
        return (
            <div>
                {
                    this.props.favoriteRecipe.length > 0 ?
                    <h4 className="link"><Link to='/favorites'>Favorites</Link></h4>
                    :
                    <div></div>
                }
                {
                    this.props.recipes.map((recipe, index) => {//index comes from map function optional second paramater
                        return (
                            <RecipeItem key={index} recipe={recipe} favoriteButton={true} />
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, null)(RecipesList);