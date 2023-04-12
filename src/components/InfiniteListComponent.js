import React, {useEffect, useState} from "react";
import './InfiniteListComponent.css';
import ListItem from './ListItem';

export default function InfiniteListComponent() {
  const [organizations, setOrganizations] = useState([
    {
    login: "AAA",
    description: "AAADescription",
    },
    {
        login: "BBB",
        description: "BBBDescription",
    }
]);

  if(organizations.length) {
    return (
      <div className="App">
        <h1>Infinite List</h1>
        <ul>
          {organizations.map(organization => 
            <ListItem key={organizations.login} props={organization}/>
          )}
        </ul>
      </div>
    );
  }
  return(
    <div className="App">Loading...</div>
  )
  
}
