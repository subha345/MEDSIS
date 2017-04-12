import React from 'react';
import { Route, IndexRoute} from 'react-router'
import Dashboard from './components/dashboard/dashboard.jsx'
import Login from './components/login/login.jsx'
import Register from './components/register/register.jsx'
import NotFound from './components/notfound/notfound'
import Application from './components/application'
import SidePanel from './components/sidepanel/sidepanel.jsx'
import ForgotPassword from './components/forgotpassword/forgotpassword.jsx'
import OtpPage from './components/otppage/otppage.jsx'
import ChangePassword from './components/changepassword/changepassword.jsx'

export default (
    <Route path='/' component={Application} >
        <IndexRoute component={Login}/>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/otp' component={OtpPage} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/forgotpassword' component={ForgotPassword} />
         <Route path='/changepassword' component={ChangePassword} />
        <Route path='*' component={NotFound} />
    </Route>
)