import React   from 'react'
import '../Quiz/quiz.css';

import unit1 from '../../image/unit1.jpg'



export default function CardQuiz(props){
    return(
        // <Grid item xs={12}  sm={3} className="grid">
        //     <div className="content__item">
        //     <a href="/quiz-page"><img src={props.url} alt="abc" className="content__item--img" /></a>
        //     <a href="/quiz-page">{props.title}</a>
        //     <div className="content__item--button">
        //         <a href="/quiz-page"><button className="button--quiz">Go Now!</button></a>
        //     </div>
        //     </div>
        // </Grid>
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


    