import React from 'react';
import './App.css';
import mSuspense from './app/components/mSuspense/mSuspense';
import { store } from './app/redux/store'
import AppContext from './app/contexts/AppContext'
import history from './history.js'
import { Provider } from 'react-redux'
import routes from './app/RootRoutes'
import { Router, Switch, Route, BrowserRouter } from 'react-router-dom'
import sessionRoutes from './app/views/sessions/SessionRoutes'
import PrivateRoute from './app/PrivateRoute';

const App = () => {
    return (
        <AppContext.Provider value={{ routes }}>
            <Provider store={store}>
              <BrowserRouter basename={process.env.PUBLIC_URL}>
                        <Router history={history}>
                                <mSuspense>
                                    <Switch>
                                        {sessionRoutes.map((item, i) => (
                                            <Route
                                                key={i}
                                                path={item.path}
                                                component={item.component}
                                            />
                                        ))}
                                            <PrivateRoute path="/dashboard" component={null} />
                                    </Switch>
                                </mSuspense>
                        </Router>
            </BrowserRouter>
                </Provider>
        </AppContext.Provider>
    )
}

export default App
