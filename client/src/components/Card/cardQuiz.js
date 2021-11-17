import React   from 'react'
import '../Quiz/quiz.css';
import { Link } from 'react-router-dom';

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
                <h2>Unit {props.quiz}: Animal</h2>
            </div>
            <div className="item__btn">
                
                <div className="item__btn--left"><Link to={"/quiz-page/"+props.quiz}>Go Try</Link> </div>
                <div className="item__btn--right"><Link to={"/quiz-page/"+props.quiz}>Start</Link> </div>
            </div>
        </div>
    );
} 


    