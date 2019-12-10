import React from 'react';
import { Card, Theme, makeStyles, createStyles, CardHeader, CardContent, Typography, CardActions } from '@material-ui/core';
import Octicon, { Repo, GitBranch, Star } from '@primer/octicons-react';

interface RepoCardProps {
  repo: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      margin: '8px',
      cursor: 'pointer',
    },
    languageColor: {
      width: '10px',
      height: '10px',
      backgroundColor: 'blue',
      marginRight: '0.75rem',
      borderRadius: '100%',
    },
    cardActions: {
      display: 'flex',
      flexGrow: 1,
      padding: '16px',
    },
    cardActionSpan: {
      display: 'flex',
      alignItems: 'center',
      marginRight: '0.75rem',
    },
    octicon: {
      marginRight: '0.75rem',
    },
  })
);

export default function RepoCard({ repo }: RepoCardProps) {
  const classes = useStyles();

  function openRepo() {
    window.open(repo.node.url, '_blank')
  }

  return (
    <Card className={classes.card} onClick={() => openRepo()}>
      <CardHeader
        avatar={
          <Octicon icon={Repo} />
        }
        title={
          <Typography variant='h5' component='h2'>
            {repo.node.nameWithOwner}
          </Typography>
        } />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {repo.node.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <span className={classes.cardActionSpan}>
          <div
            className={classes.languageColor}
            style={{ backgroundColor: repo.node.primaryLanguage.color }} />
          <Typography variant="body2" color="textSecondary" component="p">
            {repo.node.primaryLanguage.name}
          </Typography>
        </span>

        <span className={classes.cardActionSpan}>
          <Octicon className={classes.octicon} icon={GitBranch} />
          <Typography variant="body2" color="textSecondary" component="p">
            {repo.node.forkCount}
          </Typography>
        </span>

        <span className={classes.cardActionSpan}>
          <Octicon className={classes.octicon} icon={Star} />
          <Typography variant="body2" color="textSecondary" component="p">
            {repo.node.stargazers.totalCount}
          </Typography>
        </span>
      </CardActions>
    </Card>
  );
}
