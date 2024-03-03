import { MenuList } from "../helpers/MenuList";
import MenuItem from "../Components/MenuItem";
import { useState } from "react";
const Menu = () => {
  const [noOfElement, setnoOfElement] = useState(6);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };
  const slice = MenuList.slice(0, noOfElement);
  return (
    <>
      <div className="menu">
        <div className="container text-center">
          <span className="main-span">Menu</span>
          <h2 className="main-h2">Explore Our Best Menu</h2>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 ">
              <p className="main-p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit assumenda sit amet consectetur sit amet consectetur
              </p>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="menu-sc row gx-0 pb-4">
            {slice.map((menuItem, key) => {
              return (
                <MenuItem
                  key={key}
                  image={menuItem.image}
                  name={menuItem.name}
                  price={menuItem.price}
                  descraption={menuItem.descraption}
                  id={menuItem.id}
                />
              );
            })}
          </div>
          <div className="text-center py-4">
            <button className="btn2" onClick={() => loadMore()}>
              Load More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
