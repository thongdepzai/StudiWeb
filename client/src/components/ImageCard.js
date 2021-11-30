import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 240,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '3rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.8rem',
    color: '#ddd',
  },
});

export default function ImageCard({ study ,checked}) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}
    collapsedHeight={50}

    >
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={study.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {study.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {study.description}
          </Typography>
        </CardContent>
      </Card>
     </Collapse>
  );
}