import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import moment from "moment-timezone";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import * as api from "../api/api";
import appActions from "../redux/actions/appActions";
import SearchBar from "../components/SearchBar";
import ForecastCard from "../components/ForecastCard";
import { useStyles } from '../styles/WeatherStyle';

const DEFAULT_CITY = {
  name: "Tel Aviv, Israel",
  id: "215854"
};

export default function WeatherPage() {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.appReducer.favorites);
  const [currentCity, setCurrentCity] = useState(DEFAULT_CITY);
  const [currentConditions, setCurrentConditions] = useState({});
  const [forecastData, setForecastData] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (location?.state?.city) {
      setCurrentCity(location.state.city)
    }
  }, [location])

  useEffect(() => {
    const cityInFavorites = favorites.find(favorite => favorite.id === currentCity.id);
    cityInFavorites ? setIsFavorite(true) : setIsFavorite(false);
  }, [favorites, currentCity])

  useEffect(() => {
    loadWeatherData(currentCity.id);
  }, [currentCity])

  async function loadWeatherData(cityId) {
    try {
      await Promise.all([getConditions(cityId), getForecast(cityId)]);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  async function getConditions(locationKey) {
    const response = await api.fetchCurrentCondition(locationKey);
    setCurrentConditions(response);
  }

  async function getForecast(locationKey) {
    const response = await api.fetchForecast(locationKey);
    setForecastData(response);
  }

  function getWeekday(date) {
    const day = moment(date).format("dddd");
    return day;
  }

  function addFavorite() {
    const newFavorite = {
      id: currentCity.id,
      name: currentCity.name
    }
    dispatch(appActions.ADD(newFavorite));
  }

  function removeFavorite(id) {
    dispatch(appActions.REMOVE(id));
  }

  return (
    <Container className={classes.container}>
      <SearchBar setCurrentCity={setCurrentCity} currentCity={currentCity} setErrorMessage={setErrorMessage} />
      <Paper variant="outlined" className={classes.root}>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={Boolean(errorMessage)}
          message={errorMessage}
          action={
            <IconButton color="inherit" size="small" onClick={() => setErrorMessage(null)}>
              <CloseIcon />
            </IconButton>
          }
        />

        <div className={classes.infoContainer}>
          <div className={classes.flexContainer}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <LocationOnIcon />
            </IconButton>
            <Typography variant="h6">
              {currentCity.name}
            </Typography>
          </div>

          <div className={classes.flexContainer}>
            {isFavorite ? (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => removeFavorite(currentCity.id)}
              >
                <FavoriteIcon />
              </IconButton>
            ) : (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => addFavorite()}
              >
                <FavoriteBorderOutlinedIcon />
              </IconButton>
            )}
            <Typography variant="h6">
              Favorite
            </Typography>
          </div>
        </div>

        <div className={classes.currentConditions}>
          <Typography variant="h6">{currentConditions.WeatherText}</Typography>
          <Typography variant="h2">{Math.round(currentConditions.Temperature?.Metric?.Value)}°C</Typography>
        </div>

        <div className={classes.scrollContainer}>
          <div className={classes.forecast}>
            
            {forecastData.map(days => {
              return (
                <ForecastCard
                  key={days.Date}
                  icon={days.Day.Icon}
                  day={getWeekday(days.Date)}
                  date={days.Date}
                  temperature={days.Temperature}
                />
              )
            })}
          </div>
        </div>
      </Paper>
    </Container>
  )
}