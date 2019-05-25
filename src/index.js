import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import FavoriteRecipeList from './components/FavoriteRecipeList';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/' component={App} exact />
                <Route path='/favorites' component={FavoriteRecipeList} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);