import { FaPlay } from "react-icons/fa6";
import img1 from "../assets/about-img.png";
const About = () => {
  return (
    <>
      <div className="About">
        <div className="container-fluid">
          <div className="row gx-0 align-items-center">
            <div className="col-md-6 ">
              <div className="About_col1">
                <img src={img1} alt="" className="img-fluid"></img>
              </div>
            </div>
            <div className="col-md-6">
              <div className="About_col2 pe-md-5 me-md-5 ps-md-5">
                <span className="main-span">About</span>
                <h2 className="main-h2">Food Is An Important Part</h2>
                <h2 className="main-h2">Of A Balanced Diet</h2>
                <p className="main-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  perspiciatis et placeat quisquam aut soluta, quam natus
                  corporis! Impedit aliquid quidem suscipit, culpa praesentium
                  nemo dolore ea vel illum nisi!
                </p>
                <p className="main-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus reiciendis nam voluptatibus unde officiis sit nisi
                  molestias vel voluptas quo perferendis aspernatur laboriosam,
                  sed quibusdam fuga! Autem, ut? Et, magnam!
                </p>
                <div className="about_col2_btns pt-4">
                  <button className="btn2" type="button">
                    Learn More
                  </button>
                  <button className="btn3 mx-2" type="button">
                    <i>
                      <FaPlay />
                    </i>
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
