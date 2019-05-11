import React from 'react';

const RepoList = (props) => (
  <div>
    <h4>Repo List</h4>
    {(props.repos.length === 0) ? 'There are no repos to display.' : null}
    {props.repos.map((element, index) => (<div>{JSON.stringify(element)}</div>))}
  </div>
)

export default RepoList;