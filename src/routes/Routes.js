import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
// import EnsureLoggedInContainer from './private/EnsureLoggedInContainer'
import RegisterSecurityNumber from '../app/components/register-security-number'
import ValidateSecurityNumber from '../app/components/validate-security-number'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={RegisterSecurityNumber} />
        <Route exact path='/validate' component={ValidateSecurityNumber} />
        {/* <EnsureLoggedInContainer>
        </EnsureLoggedInContainer> */}
        <Redirect to='/' />
    </Switch>
)

export default Routes