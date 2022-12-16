// Import library
import React from "react";

// Import Components
import Searchbox from '../components/general/Searchbox';
import FoodListRating from '../components/foodlist/FoodListRating';

function ListRatingPage() {
  return (
    <div>
      <Searchbox/>
      <FoodListRating/>
    </div>
  );
}

export default ListRatingPage;
