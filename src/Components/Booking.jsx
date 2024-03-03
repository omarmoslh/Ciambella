import React from 'react'

const Booking = () => {
  return (
    <>
     <section className="section-wrapper-8 content-inner-1">
                    <div className="container">
                      <div className="row inner-section-wrapper align-items-center">
                        <div className=" col-lg-3 col-sm-6">
                          <div className="icon-bx-wraper style-5 hover-aware box-hover ">
                            <div className="icon-bx">
                              <div className="icon-cell">
                                <i className="flaticon-placeholder"></i>
                              </div>
                            </div>
                            <div className="icon-content">
                              <h5 className="title">Location</h5>
                              <p>
                                6952 Shelley St
                                <br />
                                Melbource
                              </p>
                              <div className="effect bg-primary"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                          <div className="icon-bx-wraper style-5 hover-aware box-hover ">
                            <div className="icon-bx">
                              <div className="icon-cell">
                                <i className="flaticon-telephone"></i>
                              </div>
                            </div>
                            <div className="icon-content">
                              <h5 className="title">Phone Number</h5>
                              <p>
                                +(800) 800-900-100 <br />
                                +222 33 567 8665
                              </p>
                              <div className="effect bg-primary"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                          <div className="icon-bx-wraper style-5 hover-aware box-hover ">
                            <div className="icon-bx">
                              <div className="icon-cell">
                                <i className="flaticon-email-1"></i>
                              </div>
                            </div>
                            <div className="icon-content">
                              <h5 className="title">Email Address</h5>
                              <p>
                                Info@Webmail.com <br />
                                Info@Example.web.com
                              </p>
                              <div className="effect bg-primary"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                          <div className="icon-bx-wraper style-5 hover-aware box-hover active">
                            <div className="icon-bx">
                              <div className="icon-cell">
                                <i className="flaticon-clock-1"></i>
                              </div>
                            </div>
                            <div className="icon-content">
                              <h5 className="title">Open &amp; Closing</h5>
                              <p>
                                Mon - Fri: 09:00am <br />
                                to 07.00pm{" "}
                              </p>
                              <div className="effect bg-primary"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="section-head text-center">
                        <h2 className="title">Reservation</h2>
                      </div>
                      <form className="dzForm dezPlaceAni" method="POST">
                        <div className="dzFormMsg"></div>
                        <input
                          type="hidden"
                          className="form-control"
                          name="dzToDo"
                          value="Contact"
                        />
                        <div className="row">
                          <div className="col-lg-6 col-md-6 m-b30 m-sm-b50">
                            <label className="form-label text-primary">
                              Your Name
                            </label>
                            <div className="input-group input-line input-black">
                              <input
                                name="dzName"
                                required=""
                                type="text"
                                className="form-control"
                                placeholder="John Doe"
                                fdprocessedid="2ol38e"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 m-b30 m-sm-b50">
                            <label className="form-label text-primary">
                              Your Email
                            </label>
                            <div className="input-group input-line input-black">
                              <input
                                name="dzEmail"
                                required=""
                                type="text"
                                className="form-control"
                                placeholder="info@example.com"
                                fdprocessedid="hwy28o"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 m-b30 m-sm-b50">
                            <label className="form-label text-primary">
                              Your Number
                            </label>
                            <div className="input-group input-line input-black">
                              <input
                                name="dzPhoneNumber"
                                required=""
                                type="text"
                                className="form-control dz-number"
                                placeholder="9876543210"
                                fdprocessedid="avatzy"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 m-b30 m-sm-b50">
                            <label className="form-label text-primary">
                              Members
                            </label>
                            <div className="input-group input-line input-black">
                              <input
                                name="dzOther[Person]"
                                required=""
                                type="text"
                                className="form-control"
                                placeholder="1 Person"
                                fdprocessedid="x60sbs"
                              />
                            </div>
                          </div>
                          <div className="col-sm-12 m-b40">
                            <label className="form-label text-primary">
                              Message
                            </label>
                            <div className="input-group input-line input-black">
                              <textarea
                                name="dzMessage"
                                required=""
                                className="form-control"
                                placeholder="Hi, do you Have a moment to talk About !"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-sm-12 m-b20">
                            <div className="input-recaptcha">
                              <div className="g-recaptcha"></div>
                              <input
                                className="form-control d-none"
                                data-recaptcha="true"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-12 text-center">
                            <button
                              name="submit"
                              value="submit"
                              type="reset"
                              className="btn btn-primary btn-hover-1"
                              fdprocessedid="cwi1t"
                            >
                              <span>Book A Table</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </section>
    </>
  )
}

export default Booking