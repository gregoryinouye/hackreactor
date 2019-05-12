import React from 'react';

const RepoEntry = (props) => (
  <div className="repoEntry">
    <a href={props.repo.owner_url}><img src={props.repo.owner_avatar} alt="avatar" className="owner_avatar" height="50" width="50"/></a>
    <div className="repoData">
      <div className="repoEntryTitle"><a href={props.repo.html_url}>{props.repo.name}</a></div>
      <div className="owner"><a href={props.repo.owner_url}>{props.repo.owner}</a></div>
      <div className="description">{props.repo.description}</div>
    </div>
  </div>
)

export default RepoEntry;