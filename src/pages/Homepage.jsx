// Import library
import React from "react";

// Import Components
import Homepage from '../components/general/Homepage';
import Navbar from '../components/general/Navbar';
import Searchbox from '../components/general/Searchbox';

function HomePage() {
  return (
    <div>
      <Homepage/>
      <Navbar/>
      <Searchbox/>
    </div>
  );
}
//test
export default HomePage;
