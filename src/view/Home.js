import React from 'react';
import Headers from '../components/headers/Index';
import Search from '../components/Search';
function Home() {
  return (
    <div>
      <Headers />
      <div style={{padding : 0,paddingLeft : 10,paddingRight : 10}}>
        <Search />
      </div>
    </div>
  );
}

export default Home;
