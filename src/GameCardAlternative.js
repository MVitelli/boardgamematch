import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  icon: {
    minWidth: '1px',
  },

}));

export default function MediaControlCard(props) {
  let { name, image_url, min_players, max_players, min_playtime, max_playtime, description_preview } = props.gameInfo;

  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={image_url}
        title="Live from space album cover"
      />

      <div className={classes.details}>

        <CardContent className={classes.content}>

          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <ListItem>
            <Grid container>
              <Grid item xs={6} sm={3}>
                <ListItemIcon aria-label="players">
                  <PeopleRoundedIcon />
                </ListItemIcon>
              </Grid>
              <Grid item xs={6} sm={3}>
                <ListItemText>
                  {min_players}-{max_players}
                </ListItemText>
              </Grid>
              <Grid item xs={6} sm={3}>
                <ListItemIcon aria-label="playtime">
                  <AccessTimeRoundedIcon />
                </ListItemIcon>
              </Grid>
              <Grid item xs={6} sm={3}>
                <ListItemText>
                  {min_playtime}/{max_playtime}
                </ListItemText>
              </Grid>
            </Grid>
          </ListItem>
        </CardContent>
        <Button size="small" color="primary" href={`/games/${name}`}>
          Learn More
        </Button>
      </div>
    </Card>
  );
}

