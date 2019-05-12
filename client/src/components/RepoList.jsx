import React from 'react';
import RepoEntry from './RepoEntry.jsx';

const RepoList = (props) => (
  <div>
    <h4>Repo List</h4>
    <div className="repoList">
      {props.repos.map((repo, index) => <RepoEntry repo={repo} key={index}/>)}
      {(props.repos.length === 0) ? <div className="repoEntry">'There are no repos to display.'</div> : null}
    </div>
  </div>
);

export default RepoList;