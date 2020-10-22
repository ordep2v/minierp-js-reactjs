import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import ProductsRegister from '../productsRegister/productsRegister'
import ProvidersRegister from '../providersRegister/providersRegister'
import ClientsRegister from '../clientsRegister/clientsRegister'

export default props => (
    <div className='content-wrapper'>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/billingCycles' component={BillingCycle} />
            <Route path='/productsRegister' component={ProductsRegister} />
            <Route path='/providersRegister' component={ProvidersRegister} />
            <Route path='/clientsRegister' component={ClientsRegister} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)