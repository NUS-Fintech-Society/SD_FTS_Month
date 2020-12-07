import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import HomePage from './pages/home/HomePage';
import BlogPage from './pages/blog/BlogPage';
import FaqPage from './pages/faq/FaqPage';
import SponsorsPage from './pages/sponsors/SponsorsPage';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="static" color='#C0C0C0'>
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" className={classes.title}>
              <p>
                NUS FinTech
                <br/>
                Society
              </p>
            </Typography>
            <Button color="inherit" href="/">Home</Button>
            <Button color="inherit" href="/sponsors">Sponsors</Button>
            <Button color="inherit" href="/faq">FAQ</Button>
            <Button color="inherit" href="/blog">Blog</Button>
          </Toolbar>
        </AppBar>
      </div>

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
