import React, {useEffect, useState} from "react";
import './InfiniteListComponent.css';
import ListItem from './ListItem';
import axios from 'axios';

export default function InfiniteListComponent() {
  const pageStep = 100;
  const apiUrl = `https://api.github.com/organizations?per_page=10&since=`;
  const [data, setData] = useState([]);
  const [requestIndex, setRequestIndex] = useState(0);


  const getAllOrganizations = () => {
    axios.get(`${apiUrl}${requestIndex}`
    )
    .then(response => setData([...data, ...response.data]))
    .then(data => console.log(data))
    .then(() => setRequestIndex(requestIndex+pageStep))
    .catch(error => console.error(`Error: ${error}`));
  }

  useEffect(() => {
    getAllOrganizations();
  }, [])


  if(data.length) {
    return (
      <div className="App">
        <h1>Infinite List</h1>
        <button onClick={getAllOrganizations}>Load more organizations</button>
        <ul>
          {data.map((dataItem, i) => 
            <ListItem key={i} props={dataItem}/>
          )}
        </ul>
      </div>
    );
  }
  return(
    <div className="App">Loading...</div>
  )
}
