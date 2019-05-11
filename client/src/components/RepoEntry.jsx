import React from 'react';

const RepoEntry = (props) => (
  <div className="repoEntry">
    <div className="repoEntryTitle">{props.repo.name}</div>
    <div className="owner">{props.repo.owner}</div>
    <div className="html_url">{props.repo.html_url}</div>
    <div className="updated_at">{props.repo.updated}</div>
    <div className="description">{props.repo.description}</div>
    <br></br>
  </div>
)

export default RepoEntry;