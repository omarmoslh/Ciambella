import img1 from "../assets/omar.png";
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <span>
          {new Date().getFullYear()} &copy; All Rights Reserved | made with
          &hearts; by{" "}
          <a href="https://portfolio-omarmoslhs-projects.vercel.app/">
            <img src={img1} alt="" className="omar" />
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;
