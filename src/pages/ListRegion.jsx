// Import library
import React from "react";

// Import Components
import Searchbox from '../components/general/Searchbox';
import FoodListRegion from '../components/foodlist/FoodListRegion';

function ListRegionPage() {
  return (
    <div>
      <Searchbox/>
      <FoodListRegion/>
    </div>
  );
}

export default ListRegionPage;
