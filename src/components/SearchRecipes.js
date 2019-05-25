import React from 'react';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setRecipes } from '../actions/index';

class SearchRecipes extends React.Component {
    constructor() {
        super();
        this.state = {
            ingredients: '',
            dish: ''
        }
    }

    search() {
        let { ingredients, dish } = this.state;
        const cors = 'https://cors-anywhere.herokuapp.com/';
        const url = `${cors}http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;

        fetch(url, {
            method: 'GET',
            /*headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
                // "Content-Type": "application/x-www-form-urlencoded",
            }*/
            //returns a promise because finishes in unknown time so wait for response w/promise
        }).then(response => response.json())//returns another promise with json data to use in next then
            .then(json => this.props.setRecipes(json.results))
    }

    render() {
        return (
            <Form inline className="form">
                <FormGroup>
                    <FormLabel>Ingredients</FormLabel>
                    {' '}
                    <FormControl
                        onChange={event => this.setState({ ingredients: event.target.value })}
                        type="text"
                        placeholder="garlic, chicken" />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Dish</FormLabel>
                    {' '}
                    <FormControl
                        onChange={event => this.setState({ dish: event.target.value })}
                        type="text"
                        placeholder="adobo"
                    />
                </FormGroup>
                <Button onClick={() => this.search()}>Submit</Button>
            </Form>
        )
    }
}

export default connect(null, { setRecipes })(SearchRecipes);