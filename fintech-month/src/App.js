import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import Logo from './images/logo.png';
import HomePage from './pages/home/HomePage';
import BlogPage from './pages/blog/BlogPage';
import FaqPage from './pages/faq/FaqPage';
import SponsorsPage from './pages/sponsors/SponsorsPage';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 2,
  },
  emptyitem: {
    flexGrow: 6,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>

      <AppBar position="static" color='#C0C0C0'>
        <Toolbar variant="dense">
          <div className={classes.emptyitem}></div>
          <div className={classes.title}>
            <img src={Logo} alt='Logo' />
          </div>
          <Button color="inherit" href="/" className={classes.title}>Home</Button>
          <Button color="inherit" href="/sponsors" className={classes.title}>Sponsors</Button>
          <Button color="inherit" href="/faq" className={classes.title}>FAQ</Button>
          <Button color="inherit" href="/blog" className={classes.title}>Blog</Button>
          <div className={classes.emptyitem}></div>
        </Toolbar>
      </AppBar>


      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/sponsors" exact component={SponsorsPage} />
        <Route path="/faq" exact component={FaqPage} />
        <Route path="/blog" exact component={BlogPage} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
