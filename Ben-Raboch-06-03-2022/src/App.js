import React from "react";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page from 'react-page-loading'
import NavBar from "./components/NavBar";
import WeatherPage from "./pages/Weather";
import FavoritesPage from "./pages/Favorites";



function App() {
  let dark = createMuiTheme();
  dark = responsiveFontSizes(dark);
  return (
    <ThemeProvider theme={dark}>
      <Page duration={1} loader={"bubble-spin"} color={"#1e8cba"} size={20}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/weather" component={WeatherPage} />
            <Route path="/favorites" component={FavoritesPage} />
          </Switch>
        </Router>
      </Page>
    </ThemeProvider>
  );
}

export default App;
