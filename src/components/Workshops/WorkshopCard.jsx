import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Button, Box } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 250,
    height: 550,
    overflowY: 'scroll',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
    },
  },
  workshopTitle: {
    lineHeight: 1.3,
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
    },
  },
  sectionHeader: {
    fontWeight: 600,
  },
  conferenceButton: {
    marginTop: 4,
  },
}))

const WorkshopCard = (props) => {
  const classes = useStyles()
  const { workshop } = props

  return (
    <Card className={classes.root}>
      <Box>
        <CardMedia
          component="img"
          alt={workshop.title}
          height="180"
          image={workshop.image}
          title={workshop.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="subtitle1"
            className={classes.workshopTitle}
          >
            {workshop.title}
          </Typography>
          {workshop.speakers.length > 0 && (
            <Typography variant="body2" className={classes.sectionHeader}>
              Speakers:
            </Typography>
          )}
          {workshop.speakers.length > 0 &&
            workshop.speakers.map((speaker, index) => {
              return (
                <Typography key={index} variant="body2" color="textSecondary">
                  {`${speaker.name} (${speaker.company})`}
                </Typography>
              )
            })}
          {workshop.moderators.length > 0 && (
            <Typography variant="body2" className={classes.sectionHeader}>
              Moderator:
            </Typography>
          )}
          {workshop.moderators.length > 0 &&
            workshop.moderators.map((speaker, index) => {
              return (
                <Typography key={index} variant="body2" color="textSecondary">
                  {`${speaker.name} (${speaker.company})`}
                </Typography>
              )
            })}
          <Typography variant="body2" className={classes.sectionHeader}>
            Date:
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {workshop.date}
          </Typography>
          <Typography variant="body2" className={classes.sectionHeader}>
            Time:
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {workshop.time}
          </Typography>
          <Typography variant="body2" className={classes.sectionHeader}>
            Location:
          </Typography>
          <Button
            color="primary"
            variant="outlined"
            endIcon={<VideocamIcon />}
            disabled={!workshop.location.link}
            onClick={() => window.open(workshop.location.link, '_blank')}
            className={classes.conferenceButton}
          >
            {workshop.location.venue}
          </Button>
          <Typography variant="body2" className={classes.sectionHeader}>
            Recording:
          </Typography>
          <Button
            color="primary"
            variant="outlined"
            endIcon={<VideocamIcon />}
            disabled={!workshop.location.recording}
            onClick={() => window.open(workshop.location.recording, '_blank')}
            className={classes.conferenceButton}
          >
            YouTube
          </Button>
        </CardContent>
      </Box>
    </Card>
  )
}

WorkshopCard.propTypes = {
  workshop: PropTypes.object,
}

export default WorkshopCard
