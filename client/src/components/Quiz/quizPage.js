import React from 'react'
import {Checkbox, Container} from '@mui/material'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import './quiz.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function quizPage(){
    return(
        <div className="fullscreen">
            <Container className="qp-container">
            <div className="qp-content">
                <div className="qp-content__question">
                    <h2>This is question?</h2>
                </div>
                <div className="qp-content__answer">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <button className="qp-button__answer"> Answer 1</button>
                    </Grid>
                    <Grid item xs={6}>
                        <button className="qp-button__answer"> Answer 2</button>
                    </Grid>
                    <Grid item xs={6}>
                        <button className="qp-button__answer">Answer 3</button>
                    </Grid>
                    <Grid item xs={6}>
                        <button className="qp-button__answer">Answer 4</button>
                    </Grid>
                    </Grid>
                </div>
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