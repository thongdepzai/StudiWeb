import React from 'react'
import {  Route, Switch,} from 'react-router-dom'
import Home from './components/Home'
import HomeVideo from './components/Video/HomeVideo'
import HomeQuiz from './components/Quiz/HomeQuiz'

import SignIn from './components/Customer/Signin'
import SignUp from './components/Customer/Signup'
import Profile from './components/Customer/Profile'

import Watch from './components/Video/HomeWatch'
import StudyUnit from './components/Quiz/StudyUnit'
import quizPage from './components/Quiz/quizPage'

export default function Routers(){
    return(
        <div>
            <Switch>
                <Route exact path="/"  component={Home} />
                <Route exact path="/Signup"  component={SignUp} />
                <Route exact path="/Signin"  component={SignIn} />
                <Route exact path="/Profile"  component={Profile} />
                
                <Route exact path="/HomeVideo/:Themes"  component={HomeVideo} />
                <Route exact path="/HomeQuiz"  component={HomeQuiz} />
                <Route exact path="/Watch/:id"  component={Watch}/>
                <Route exact path="/StudyUnit"  component={StudyUnit}/>
                <Route exact path="/quiz-page"  component={quizPage}/>

                <Route component={Home} />

            </Switch>
        </div>
    )
}