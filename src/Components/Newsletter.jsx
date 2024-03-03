import { Link } from "@mui/material";

const Newsletter = () => {
  return (
    <>
      <div className="Newsletter">
        <div className="container pt-5">
          <div className="row gx-0 text-center">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <h2 className="main-h2">Have Question In Mind?</h2>
              <h2 className="main-h2">Let us help You</h2>
              <div className="Newsletter_col">
                <div className="btn-ques my-5 p-2 text-center">
                  <Link href="mailto:omoslh@gmail.com" target={"_blank"}>
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                    >
                      Send
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
