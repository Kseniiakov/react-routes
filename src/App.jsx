import './App.css';
import React from 'react';
import HomePage from './pages/Home';
import CatalogPage from './pages/Catalog';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import ProfilePage from './pages/Profile';
import MessagePage from './pages/Message';
import PageNotFoundPage from './pages/PageNotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Counter from './components/Counter';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  render() {
    return (
      <BrowserRouter>

        <header id='mainHeader'>
          
          <Link to="/">
            <img className='logo' src="./images/logo.svg" alt="logo" />
          </Link>

          <nav className='navigation'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/catalog'>Catalog</Link>
              </li>
              <li>
                <Link to='/signup'>Signup</Link>
              </li>
              <li>{this.state.user 
                  ? (<Link to='/profile'>Profile</Link>) 
                  : (<Link to='/login'>Login</Link>)}
              </li>
              <li>
                <Link to='/message'>Message</Link>
              </li>
              <li>
                <Link to='/counter'>Counter</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
  
            <Route exact path='/'>
              <HomePage />
            </Route>
  
            <Route exact path='/catalog'>
              <CatalogPage />
            </Route>
  
            <Route exact path='/login'>
              <LoginPage />
            </Route>
  
            <Route exact path='/signup'>
              <SignupPage />
            </Route>

            <Route exact path='/message'>
              <MessagePage />
            </Route>

            <Route exact path='/counter'>
              <Counter step={2}/>
            </Route>

            <Route path='*'>
              <PageNotFoundPage />
            </Route>
                  
            <PrivateRoute 
              route={{ exact: true, path: "/profile" }} 
              auth={this.state.user}>
              <ProfilePage />
            </PrivateRoute>
  
          </Switch>
        </main>
      </BrowserRouter>
    );
  }


}

export default App;
