import { FaCartPlus } from "react-icons/fa6";
import img1 from "../assets/menu/donuts/blueberry.jpg";

const Offers = () => {
  return (
    <>
      <div className="offers">
        <div className="container text-center">
          <span className="offers-span">Offers</span>
          <h2 className="offers-h2">Explore Our Best Ciambella Offers</h2>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 ">
              <p className="offers-p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit assumenda sit amet consectetur sit amet consectetur
              </p>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="offers-sc row gx-0 pb-4">
            <div className="offers-sc1 col-md-4">
              <div className="offers_col">
                <div className="card">
                  <img src={img1} className="" alt="..." />
                  <span>50 EGP</span>
                  <div className="card-body">
                    <h5>Bluberry Donut</h5>
                    <p>
                      Blueberry donuts with blueberry cream filling and
                      chocolate coating
                    </p>
                    <button className="btn-card">
                      <FaCartPlus /> Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="offers_col">
                <div className="card">
                  <img src={img1} className="" alt="..." />
                  <span>50 EGP</span>
                  <div className="card-body">
                    <h5>Bluberry Donut</h5>
                    <p>
                      Blueberry donuts with blueberry cream filling and
                      chocolate coating
                    </p>
                    <button className="btn-card">
                      <FaCartPlus /> Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="offers_col"></div>
            </div>
          </div>
          <div className="text-center py-4">
            <button className="btn2">Load More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
