import React, { useState, useEffect } from "react";
import axios from "axios";
import STable from './Table';

export default function SummaryTable(props) {


  const [summaryData, setsummaryData] = useState();
  const [loading, setloading] = useState(true);

useEffect(() => {
 axios({
    method: "GET",
    url: "http://localhost:4000/summary",
    
  })
    .then((response) => {
      setsummaryData(response);
      setloading(false);
    })
    .catch((error) => {
      console.log(error);
    });  
}, []);

  return (
    <div>
      {loading ? (
        <div>Summary detail is being processed...<br/>Please wait...</div>
      ) : (
        <div>
          <STable colData={summaryData.data.col} rowData={summaryData.data.data}/>
        </div>
      )}
    </div>
  );
}
