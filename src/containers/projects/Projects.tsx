import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { Button, withStyles } from '@material-ui/core';
import gql from 'graphql-tag';
import RepoCard from '../../components/repo-card/RepoCard';

import './Projects.css';

const getPinnedRepos = gql`{
  repositoryOwner(login: "hbvhuwe") {
    ... on User {
      pinnedRepositories(first: 6) {
        edges {
          node {
            nameWithOwner
            description
            forkCount
            stargazers {
              totalCount
            }
            url
            id
            diskUsage
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
}`

const StyledButton = withStyles({
  root: {
    margin: '16px',
    textTransform: 'uppercase',
  },
})(Button);

export default function Projects() {
  const { loading, error, data } = useQuery(getPinnedRepos);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const repos: any[] = data.repositoryOwner.pinnedRepositories.edges;

  console.log(repos)

  return (
    <div className="opensource-main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {
          repos.map(repo => (
            <RepoCard repo={repo} key={repo.node.id} />
          ))
        }
      </div>
      <StyledButton variant='contained' color='primary'
        href='https://github.com/hbvhuwe'>
        More projects
      </StyledButton>
    </div>
  );
}
