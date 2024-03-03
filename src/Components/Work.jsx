import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
const Work = () => {
  return (
    <>
      <div className="Work">
        <div className="container text-center">
          <span className="main-span">Work</span>
          <h2 className="main-h2">How it Works</h2>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <p className="main-p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit assumenda sit amet consectetur sit amet consectetur
              </p>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row gx-0 algin-items-center work-main px-md-5 mx-md-3">
            <div className="col-md-4">
              <div className="work-col1">
                <img src={icon1} alt="" className="img-fluid" />
                <h5>Pick Order</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  odio, voluptatibus recusandae vitae voluptatem eum dolores
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-col1">
                <img src={icon2} alt="" className="img-fluid" />
                <h5>Choose How Often</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                  hic, saepe tenetur unde doloremque ex nulla repellendus culpa
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-col1">
                <img src={icon3} alt="" className="img-fluid " />
                <h5>Fast Deliveries</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  commodi iusto, sint numquam tempore impedit sapiente expedita
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
