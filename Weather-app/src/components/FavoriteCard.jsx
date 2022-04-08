import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import * as api from "../api/api";
import getIconImage from "../api/weatherIconMapping";
import {useStyles} from '../styles/FavoriteCardStyle';

export default function FavoriteCard({ city, setErrorMessage }) {
  const classes = useStyles();
  const [currentConditions, setCurrentConditions] = useState({});

  useEffect(() => {
    getConditions(city)
  }, [city])

  async function getConditions(city) {
    try {
      const response = await api.fetchCurrentCondition(city.id);
      setCurrentConditions(response);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <Card className={classes.root}>

      <Typography component="h5" variant="h5">
        {city.name}
      </Typography>

      <div className={classes.content}>
        <img className={classes.image} src={getIconImage(currentConditions.WeatherIcon)} alt="img" />

        <div className={classes.details}>
          <Typography variant="subtitle1" color="textSecondary">
            {currentConditions.WeatherText}
          </Typography>
          <Typography component="h5" variant="h5">
            {Math.round(currentConditions?.Temperature?.Metric.Value)}°C
          </Typography>
        </div>
      </div>
    </Card>
  );
}
