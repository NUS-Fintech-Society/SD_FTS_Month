import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import FTSLogo from './images/FTS_logo.png';
import FMLogo from './images/FM_logo.png';
import HomePage from './pages/home/HomePage';
import HackathonPage from './pages/home/HackathonPage';
import BlogPage from './pages/blog/BlogPage';
import FaqPage from './pages/faq/FaqPage';
import RaiCapital from './pages/sponsors/RaiCapital';
import Fundedhere from './pages/sponsors/FundedHere';
import BNPP from './pages/sponsors/BNPP';
import Stanley from './pages/sponsors/Stanley';
import Genping from './pages/sponsors/Genping';
import EventOverviewPage from './pages/home/EventOverviewPage';
import RegDatePage from './pages/home/RegDatePage'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 2,
  },
  emptyitem: {
    flexGrow: 3,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>

      <AppBar position="static" color='#C0C0C0'>
        <Toolbar variant="dense">
          
          <div className={classes.title}>
            <img class='App-logo' src={FMLogo} alt='Logo' />
          </div>
          <div className={classes.title}>
            <img class='App-logo' src={FTSLogo} alt='Logo' />
          </div>
          <div className={classes.emptyitem}></div>
          <Button color="inherit" href="/" className={classes.title}>Home</Button>
          <Button color="inherit" href="/sponsors/raicapital" className={classes.title}>Sponsors</Button>
          <Button color="inherit" href="/faq" className={classes.title}>FAQ</Button>
          <Button color="inherit" href="/blog" className={classes.title}>Blog</Button>
          <div className={classes.emptyitem}></div>
          <div className={classes.emptyitem}></div>
          
        </Toolbar>
      </AppBar>


      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/hackathon" exact component={HackathonPage} />
        <Route path="/sponsors/raicapital" exact component={RaiCapital} />
        <Route path="/sponsors/fundedhere" exact component={Fundedhere} />
        <Route path="/sponsors/bnpp" exact component={BNPP} />
        <Route path="/sponsors/stanley" exact component={Stanley} />
        <Route path="/sponsors/genping" exact component={Genping} />
        <Route path="/faq" exact component={FaqPage} />
        <Route path="/blog" exact component={BlogPage} />
        <Route path="/eventoverview" exact component={EventOverviewPage}/>
        <Route path="/registrationdates" exact component={RegDatePage}/>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
