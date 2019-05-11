import React from 'react';
import RepoEntry from './RepoEntry.jsx';

const RepoList = (props) => (
  <div>
    <h4>Repo List</h4>
    {(props.repos.length === 0) ? 'There are no repos to display.' : null}
    {props.repos.map((repo, index) => <RepoEntry repo={repo} key={index}/>)}
  </div>
);

export default RepoList;