import React from 'react';
import { Route, IndexRoute} from 'react-router'
import Dashboard from './components/dashboard/dashboard.jsx'
import Login from './components/login/login.jsx'
import Register from './components/register/register.jsx'
import NotFound from './components/notfound/notfound'
import Application from './components/application'
import SidePanel from './components/sidepanel/sidepanel.jsx'
import ForgotPassword from './components/forgotpassword/forgotpassword.jsx'

export default (
    <Route path='/' component={Application} >
        <IndexRoute component={Login}/>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/sidepanel' component={SidePanel} />
        <Route path='/forgotpassword' component={ForgotPassword} />
        <Route path='*' component={NotFound} />
    </Route>
)