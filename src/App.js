import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Rate from "./Rate/Rate";
import About from "./About/About";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import News from './News/News';
import Profile from './Profile/Profile';
import Login from './Profile/Login';

class App extends React.Component {
  state = {
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
    user: {
      name: localStorage.getItem("username") || "",
    },
  };

  onLogin = (username, history) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);
    this.setState((prevState) => ({
      isLoggedIn: true,
      user: {
        ...prevState.user,
        name: username,
      },
    }));
  };

  handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    this.setState({ isLoggedIn: false, user: { name: "" } });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isLoggedIn !== prevState.isLoggedIn) {
      localStorage.setItem("isLoggedIn", this.state.isLoggedIn.toString());
    }
  }

  render() {
    const { isLoggedIn, user } = this.state;

    return (

      <div className="site">
        <Header isLoggedIn={isLoggedIn} handleLogout={this.handleLogout} />

        <div className="container">
          <main>
            <ErrorBoundary>
              <Routes>
                <Route exact path="/" element={<Rate />} />
                <Route exact path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/login" element={<Login onLogin={this.onLogin} />} />
                <Route
                  path="/profile"
                  element={isLoggedIn ? <Profile user={user} /> : <Navigate to="/" />}
                />
              </Routes>
              <Outlet />
            </ErrorBoundary>
          </main>
        </div>

        <Footer isLoggedIn={isLoggedIn} handleLogout={this.handleLogout} />
      </div>

    );
  }
}

export default App;