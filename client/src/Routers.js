import React from 'react'
import {  Route, Switch,} from 'react-router-dom'
import Home from './components/Home'
import HomeVideo from './components/Video/HomeVideo'
import HomeQuiz from './components/Quiz/HomeQuiz'

import SignIn from './components/Customer/Signin'
import SignUp from './components/Customer/Signup'
import Profile from './components/Customer/Profile'

export default function Routers(){
    return(
        <div>
            <Switch>
                <Route exact path="/"  component={Home} />
                <Route exact path="/Signup"  component={SignUp} />
                <Route exact path="/Signin"  component={SignIn} />
                <Route exact path="/Profile"  component={Profile} />
                
                <Route exact path="/HomeVideo"  component={HomeVideo} />
                <Route exact path="/HomeQuiz"  component={HomeQuiz} />

                <Route component={Home} />

            </Switch>
        </div>
    )
}