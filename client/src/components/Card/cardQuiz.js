import React   from 'react'
import '../Quiz/quiz.css';

import unit1 from '../../image/unit1.jpg'



export default function CardQuiz(props){
    return(
        <div className="item__unit">
            <div className="item__image">
                
                <img src={unit1} alt="" />
            </div>
            <div className="item__point">
                <h3>Point: 0/30</h3>
            </div>
            <div className="item__title">
                <h2>Unit 1: Animal</h2>
            </div>
            <div className="item__btn">
                
                <div className="item__btn--left"><a href="/quiz-page">Go Try</a> </div>
                <div className="item__btn--right"><a href="/quiz-page">Start</a> </div>
            </div>
        </div>
    );
} 


    