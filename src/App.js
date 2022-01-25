import React from "react";
import "./App.css";
import MSuspense from "./app/components/mSuspense/mSuspense";
import { store } from "./app/redux/store";
import AppContext from "./app/contexts/AppContext";
import history from "./history.js";
import { Provider, useSelector } from "react-redux";
import routes from "./app/RootRoutes";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import sessionRoutes from "./app/views/sessions/SessionRoutes";
import PrivateRoute from "./app/PrivateRoute";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import themes from './themes';
import theme from './themes/themeDB'
import ResponsiveDrawer from './app/views/dashboard/ResponsiveDrawer'
import JwtLogin from './app/views/sessions/auth/Login3'

const App = () => {

    const customization = useSelector((state) => state.customization);
    const authRoute = () => {
        return (
            <div>
                <ResponsiveDrawer >
                <Switch>
                    {
                        sessionRoutes.map((item, i) => (
                            <Route exact
                                key={i}
                                path={item.path}
                                component={ item.component }
                            />
                        ))
                    }    
                </Switch>    
                </ResponsiveDrawer>
            </div>
        )
    }

    return (
        <AppContext.Provider value={{ routes }}>
        <Provider store={store}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Router history={history}>
            <MSuspense>
                <Switch>
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={themes(customization)}>
                    <CssBaseline />
                    
                    <Route exact path="/" component={JwtLogin} />
                 
                                    </ThemeProvider>
                                    <ThemeProvider theme={theme}>

                                    <Route component={authRoute} />
                                </ThemeProvider>
                </StyledEngineProvider>
                </Switch>
            </MSuspense>
            </Router>
            </BrowserRouter>
        </Provider>
        </AppContext.Provider>
    );
};

export default App;
