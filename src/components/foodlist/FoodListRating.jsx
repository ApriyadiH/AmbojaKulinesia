// Import library
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React from "react";

const FoodListRating = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="page-content">
            <h4>Best Culinary from Indonesia</h4>
            <div className="card text-bg-light mb-3">
              <div className="card-body">
                <div className="overflow-auto">
                  <div className="d-flex flex-row mb-3">
                    <div className="p-2" max-width="400px">
                      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" >
                        <div className="carousel-inner">
                          <div className="carousel-item active" data-bs-interval="10000">
                            <img src="https://assets-pergikuliner.com/EDle-bmTQ12rm8q62JhGeSeFRoA=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/image/picture/1172807/picture-1543562853.JPG" className="d-block w-100" alt="gambar_pempek"/>
                          </div>
                          <div className="carousel-item" data-bs-interval="2000">
                            <img src="https://4.bp.blogspot.com/-5FjZ7LVbbDU/VKk7xfTeISI/AAAAAAAAKuQ/CWnpFlKcUfU/s1600/pempek%2Brecipes.jpg" className="d-block w-100" alt="gambar_pempek2"/>
                          </div>
                          <div className="carousel-item">
                            <img src="https://resepkoki.id/wp-content/uploads/2017/07/Resep-Pempek-Lenggang.jpg" className="d-block w-100" alt="gambar_pempek3"/>
                          </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>

  
                    </div>
                    <div className="p-2">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa minus accusantium adipisci? Molestias, nisi ipsa iste aliquid vero architecto autem obcaecati rem dolore. Aliquid recusandae obcaecati dolor reprehenderit omnis molestias?
                    </div>
                    <div className="p-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum dolor in est suscipit et ab aut officiis. Non pariatur, harum cupiditate ratione ipsam porro alias at voluptatum facilis veritatis!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodListRating;