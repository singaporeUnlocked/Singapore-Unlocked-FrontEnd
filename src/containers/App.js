import React from "react";
import "./App.scss";
import { connect } from "react-redux";
import { setCurrentLang } from "../store/Lang/LangAction";
import Login from './Login/Login'

class App extends React.Component {
  // App contains routes and also wrapped with snackbar and intl for localization

  render() {
    const { lang, loading } = this.props;
    return (
      <Login />
    );
  }
}

const mapStateToProps = ({ lang, loading }) => ({
  lang,
  loading,
});

export default connect(mapStateToProps, { setCurrentLang })(App);
