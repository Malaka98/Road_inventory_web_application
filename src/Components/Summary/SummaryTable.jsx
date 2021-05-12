import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import STable from './Table';

export default function SummaryTable(props) {


  const [summaryData, setsummaryData] = useState();
  const [loading, setloading] = useState(true);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

useEffect(() => {
  const formdata = new FormData();

  formdata.append("searchkey", query.get("skey"));
 axios({
    method: "POST",
    url: "http://localhost:4000/summary",
    data: formdata,
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
          <STable colData={summaryData.data.col} rowData={summaryData.data.data} rowData2={summaryData.data.data2}/>
        </div>
      )}
    </div>
  );
}
