"use client";
import Item from "./Item";

const List = ({ data }) => {
  return (
    <div className="list">
      {data?.map((element, index) => (
        <Item item={element} key={index} />
      ))}
    </div>
  );
};

export default List;
