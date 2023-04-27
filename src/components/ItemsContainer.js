import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, COMPANY1, COMPANY2 } from "../data/Menus";
const ItemsContainer = () => {
  return (
    <div className="lg:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:px-8 px-5 py-16">
      <Item Links={PRODUCTS} title="Address" />
      <Item Links={RESOURCES} title="Phone" />
      <Item Links={COMPANY} title="Social Media" />
      <Item Links={COMPANY1} title="    " />
      <Item Links={COMPANY2} title="    " />
      
    </div>
  );
};

export default ItemsContainer;