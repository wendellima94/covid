import React from 'react';

function api() {
  React.useEffect( () => {
    async function fetchData() {
      const response = await fetch('https://covid.ourworldindata.org/data/owid-covid-data.json');
      const data = await response.json();
      console.log(data);
    }
    fetchData();
  },[])
  return <div />;
}

export default api;