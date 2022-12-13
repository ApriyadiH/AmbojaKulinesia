// Import library
import React from "react";

// Import Components
import Navbar from '../components/general/Navbar';
import Searchbox from '../components/general/Searchbox';
import Detail from '../components/general/Detail';

function DetailPage() {
  return (
    <div>
      <Navbar/>
      <Searchbox/>
      <Detail/>
    </div>
  );
}

export default DetailPage;
