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


import QuizPage from './components/Quiz/quizPage'
import HomeBlog from './components/Blog/HomeBlog'
import DetailBlog from './components/Blog/DetailBlog'
//course 
import MainPage from './components/HomeCourse/MainPage'
import Checkout from './components/HomeCourse/Checkout'
import DetailCourse from './components/HomeCourse/DetailCourse'
import ListSearchVideo from './components/Video/ListSearchVideo'


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
                <Route exact path="/StudyUnit/:Themes"  component={StudyUnit}/>

                <Route exact path="/quiz-page/:skill"  component={QuizPage}/>
                <Route exact path="/Blog/"  component={HomeBlog}/>
                <Route exact path="/Detail/:id"  component={DetailBlog}/>
                {/* course */}
                <Route exact path="/home-course"  component={MainPage}/>
                <Route exact path="/checkout"  component={Checkout}/>
                <Route exact path="/detail-course/:id"  component={DetailCourse}/>

                {/* {search} */}
                <Route exact path="/SearchVideo/:searchInput" component={ListSearchVideo}/>

                <Route component={MainPage} />

            </Switch>
        </div>
    )
}