import { FaLocationDot } from "react-icons/fa6";
import img1 from "../assets/img1.png";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import About from "../Components/About";
import Work from "../Components/Work";
import Menu from "../Components/Menu";
import Testimonial from "../Components/Testimonial";
import Newsletter from "../Components/Newsletter";

const Home = () => {
  return (
    <>
      {/* home1 */}
      <div className="Home">
        <div className="container-fluid Home-Main">
          <div className="row gx-0 align-items-center ">
            <div className="col-md-6">
              <div className="home_col1">
                <h1>Your Favourite Desert</h1>
                <h1>Delivered Hot &</h1>
                <h1>Fresh</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  amet laudantium expedita optio provident ad fugiat, omnis
                  adipisci quae! Quae, nam! Quo assumenda veritati
                </p>
                <button className="btn2">
                  Order Now <FaArrowRight className="ar" />{" "}
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="home_col2">
                <img src={img1} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* delivery */}
      <div className="Delivery">
        <div className="container text-center">
          <div className="delivery-col-items row gx-0">
            <div className="col-md-4 ">
              <div className="Delivery_col">
                <i>
                  <LuClock />
                </i>
                <h5>Today 9:00 am - 1:00 am</h5>
                <p>Working Hours</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="Delivery_col">
                <i>
                  <FaLocationDot />
                </i>
                <h5>Portsaid, Egypt</h5>
                <p>Get Directions</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="Delivery_col">
                <i>
                  <FaPhoneAlt />
                </i>
                <h5>+20663202318</h5>
                <p>Call Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
        <Work />
        <Menu />
        <Testimonial />
        <Newsletter />
    </>
  );
};

export default Home;
