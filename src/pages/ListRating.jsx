// Import library
import React from "react";

// Import Components
import Navbar from '../components/general/Navbar';
import Searchbox from '../components/general/Searchbox';
import FoodListRating from '../components/general/FoodListRating';

function ListRatingPage() {
  return (
    <div>
      <Navbar/>
      <Searchbox/>
      <FoodListRating/>
    </div>
  );
}

export default ListRatingPage;
