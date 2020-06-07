import React from 'react';

const RepoEntry = (props) => (
  <div className="repoEntry">
    <div className="avatar"><a href={props.repo.owner_url}><img src={props.repo.owner_avatar} alt="avatar" className="owner_avatar" height="75" width="75"/></a></div>
    <div className="repoData">
      <div className="repoEntryTitle"><a href={props.repo.html_url}>{props.repo.name}</a></div>
      <div className="owner"><a href={props.repo.owner_url}>{props.repo.owner}</a></div>
      <div className="description">{props.repo.description}</div>
    </div>
  </div>
)

export default RepoEntry;