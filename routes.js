import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './src/components/Header';
import Main from './src/pages/main';
import Cart from './src/pages/cart';

const Routes = () => (
    <BrowserRouter>
        <div>
            <Route path='/' component={Header} /> 
            <Route path='/' exact component={Main} />
            <Route path='/cart' component={Cart} />
        </div>
    </BrowserRouter>
)

export default Routes;