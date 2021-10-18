import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import '../Quiz/quiz.css';




// const cardQuiz = (props)=>{
//     return(
        // <Grid item xs={12}  sm={3} className="grid">
        //       <div className="content__item">
        //         <a href="#"><img src="https://benative.vn/wp-content/uploads/2019/03/bai-quiz-tieng-anh-250x240.jpg" alt="abc" className="content__item--img" /></a>
        //         <a href="#">Bài quiz tiếng Anh chủ đề: Subordinate Conjunction Test</a>
        //         <div className="content__item--button">
        //           <a href="#"><button className="button--quiz">Go Now!</button></a>
        //         </div>
        //       </div>
        // </Grid>
//     );
// }
// export default cardQuiz;
export default function cardQuiz(props){
    return(
        <Grid item xs={12}  sm={3} className="grid">
            <div className="content__item">
            <a href="#"><img src="{props.url}" alt="abc" className="content__item--img" /></a>
            <a href="#">{props.title}</a>
            <div className="content__item--button">
                <a href="#"><button className="button--quiz">Go Now!</button></a>
            </div>
            </div>
        </Grid>
    );
} 


    