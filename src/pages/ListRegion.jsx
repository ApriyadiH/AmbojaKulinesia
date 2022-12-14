// Import library
import React from "react";

// Import Components
import Navbar from '../components/general/Navbar';
import Searchbox from '../components/general/Searchbox';
import FoodListRegion from '../components/foodlist/FoodListRegion';

function ListRegionPage() {
  return (
    <div>
      <Navbar/>
      <Searchbox/>
      <FoodListRegion/>
    </div>
  );
}

export default ListRegionPage;
