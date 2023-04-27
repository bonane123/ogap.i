import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold text-red-400">{title}</h1>
      {Links.map((link) => (
        <li key={link.name} className="text-gray-400  duration-300
        text-sm cursor-pointer leading-6">
          {link.name}
        </li>
      ))}
    </ul>
  );
};

export default Item;