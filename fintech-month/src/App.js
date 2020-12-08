import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
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
    flexGrow: 2,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>

      <AppBar position="static" color='#C0C0C0'>
        <Toolbar variant="dense">
          <div className={classes.emptyitem}></div>
          <IconButton className={classes.title}>
            <EmojiEmotionsIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            <p>
              NUS FinTech
              <br />
              Society
            </p>
          </Typography>
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
