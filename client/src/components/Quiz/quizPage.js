import React from 'react'
import {Checkbox, Container} from '@mui/material'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import './quiz.css';
import AnswerItem from '../Card/AnswerItem';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Unit = [
    {
        "id" : 1,
        "question": "Could you tell me your surname?",
        "answer_1": "Would you like me to spell it?",
        "answer_2": "Do you like my family name?",
        "answer_3": "How do I say that?",
        "answer_4": "What your name?",
        "true_answer": 1,  
    },
    {
        "id" : 2,
        "question": "This plant looks dead.",
        "answer_1": "It's in the garden.",
        "answer_2": "It only needs some water.",
        "answer_3": "It's sleeping.",
        "answer_4": "What your name?",
        "true_answer": 3,  
    }

]
function quizPage(){
    
    return(
        <div className="fullscreen">
            <Container className="qp-container">
            <div className="qp-content">
               <AnswerItem
               key = {Unit[0].id}
               question = {Unit[0].question}
               answer_1 = {Unit[0].answer_1}
               answer_2 = {Unit[0].answer_2}
               answer_3 = {Unit[0].answer_3}
               answer_4 = {Unit[0].answer_4}
               ></AnswerItem>
            </div>
            </Container>
            <div className="line"></div>
            <Container className="qp-container">
            <div className="qp-buttons">
                <Grid item xs={6}>
                    <Button variant="outlined">Skip</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button size="large" variant="contained" endIcon={<SendIcon />}>Continue</Button>
                </Grid>
            </div>
            </Container>
        </div>
        
    );

}
export default quizPage;