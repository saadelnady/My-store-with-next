"use client";
import Image from "next/image";

const Item = ({ item }) => {
  const { name, slug, image } = item;
  return (
    <div className="item">
      <Image
        src={image}
        alt="category-img"
        width={"300"}
        height={"300"}
        className="item-img"
      />
      <p>{name}</p>
    </div>
  );
};

export default Item;
