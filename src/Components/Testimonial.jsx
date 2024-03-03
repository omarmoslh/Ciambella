import img1 from "../assets/img6.jpg";

const Testimonial = () => {
  return (
    <>
      <div className="Testimonial">
        <div className="container">
          <div className="text-center">
            <span className="main-span">Testimonial</span>
            <h2 className="main-h2">What They are Saying</h2>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <p className="main-p">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
          <div className="row gx-0">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="testimonial_col">
                <div className="fb-com items-center">
                  <div className="fb-com1">
                    <img src={img1} alt="" />
                    <div className="comment">
                      <div className="fb-com2">
                        <span>Jon Doe</span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
