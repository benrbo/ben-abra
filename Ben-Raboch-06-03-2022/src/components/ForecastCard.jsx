import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import getIconImage from "../api/weatherIconMapping";
import {useStyles} from '../styles/ForecastCardStyle';
import moment from 'moment';



export default function ForecastCard({ icon, day, temperature, date }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <img src={getIconImage(icon)} alt="img"></img>

        <Typography gutterBottom component="h5" variant="h5">
          {day}
        </Typography>

        <Typography gutterBottom component="h6" variant="h6">
        {moment(date).format('DD/MM/YYYY')}
        </Typography>

        <div className={classes.container}>
          <Typography variant="subtitle1" className={classes.margin}>
           Day {Math.round(temperature.Maximum.Value)}°
            </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          Night {Math.round(temperature.Minimum.Value)}°
            </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
