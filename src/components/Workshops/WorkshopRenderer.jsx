import React from 'react'
import { makeStyles, styled } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Box, Card, Button, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography } from '@material-ui/core'
import workshops from '../../data/workshops'

const ExpandMore = styled(
  (props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    }
  )
  (
    ({ theme, expand }) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    })
  );

const useStyles = makeStyles((theme) => ({
  workshopWrapper: {
    width: '100%',
    maxWidth: '960px',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '25px',
    paddingBottom: '25px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      justifyContent: 'center',
    }
  },
  workshopBodyWrapper: {
    // body consists of image and description
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      paddingTop: '20px',
      justifyContent: 'center',
      alignItems:'center',
      textAlign: 'center',
      margin: 'auto'
    },
  },
  workshopTitle: {
    paddingTop: '4px',
    textAlign: 'left',
    fontWeight: 700,
    maxWidth: '100%',
    lineHeight: '1',
    height: '50px',
    [theme.breakpoints.down('sm')]: {
        height: 'auto'
    }
  },
  workshopDescription: {
    width: '100%',
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'justify',
      width: '100%',
      justifyContent: 'center',
      margin: 'auto',
      height: 'auto',
    },
  },
  workshopRegisterLink: {
    align: 'left',
    paddingTop: '25px',
    [theme.breakpoints.down('sm')]: {
      align: 'center',
      margin: 'auto',
    },
  },
  tagText: {
    fontWeight: '400',
    paddingBottom: '40px',
    color: theme.palette.text.workshopTag,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  registerText: {
    fontWeight: '400',
    color: theme.palette.text.link,
    textAlign: 'left',
    textDecoration: 'none',
  },
  roleText: {
    fontWeight: '400',
    textAlign: 'left',
  },
  workshopImage: {
    borderRadius: '20px',
  },
  workshopCard: {
    width: '100%',
    textAlign: 'center',
    margin: 'auto',
    justifyContent: 'center',
    maxHeight: '100%',
  },
  cardWrapper: {
    padding: '20px',
    maxWidth: '33%',
    minWidth: '33%',
    maxHeight: '100%',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '20px',
      width: '360px',
      maxWidth: '360px',
    }
  },
  moreCardWrapper: {
    padding: '10px',
    maxWidth: '25%',
    minWidth: '25%',
    maxHeight: '100%',
    minHeight: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '360px',
      maxWidth: '360px',

    }
  },
  expandBox: {
    width: '100%',
    textAlign: 'center',
    marginTop: 'auto',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      height: 'auto'
    }
  }
}))


const WorkshopRenderer = () => {
  const classes = useStyles()

  const workshopArray = []
  for (var i = 0; i < workshops.length; i++) {
    workshopArray.push(
      
      <Box key={i} className={classes.workshopWrapper}>
        <Typography variant='h5' className={classes.tagText}>
          #{workshops[i]['tag']}  
        </Typography>
        
        <Box className={classes.workshopBodyWrapper}>
          {formatCards(i)}
        </Box>
      </Box>
    )
  }
  return workshopArray
}

const formatCards = (i) => {
  var tagWorkshops = workshops[i]['workshops']
  const classes = useStyles()
  const workshopArray = []

  var size = tagWorkshops.length
  for (var j = 0; j < size; j++) {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    workshopArray.push(  
      <Box className={size > 3 ? classes.moreCardWrapper : classes.cardWrapper}>
        <Card className={classes.workshopCard}>
            <CardMedia
              component="img"
              height="194"
              image="workshop-image.png"
              alt="Workshop Image"
            />
        <CardContent>
          <Typography className={classes.registerText}>
            {tagWorkshops[j]['name']}
          </Typography>
          <Typography className={classes.roleText}>
            {tagWorkshops[j]['role']}
          </Typography>
          <Typography variant='subtitle1' className={classes.workshopTitle}>
            {tagWorkshops[j]['title']}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>

        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography className={classes.workshopDescription}>
              {tagWorkshops[j]['description']}
            </Typography>
            <Box paddingTop ="20px">
              <Button
                color="primary"
                variant="contained"
                href="https://www.google.com"
              >
                  Register
              </Button>
            </Box>
            
          </CardContent>
        </Collapse>

        <Box className={classes.expandBox}>
          <Typography>
            {expanded ? 'view less' : 'view more'}
          </Typography>
          <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              textAlign="center"
              justifyContent="center"
          >
            <ExpandMoreIcon/>
          </ExpandMore>
        </Box>
      </Card>
    </Box>
    )
  }
  return workshopArray
}

export default WorkshopRenderer
