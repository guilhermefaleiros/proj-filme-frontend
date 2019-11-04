import { BrowserRouter, Switch, Route} from 'react-router-dom'
import React from 'react'

import Busca from './pages/Busca'
import Dashboard from './pages/Dashboard'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Busca} />
                <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}