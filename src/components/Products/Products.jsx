import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

// images import
import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-9.jpg";
import Img7 from "../../assets/product/p-7.jpg";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Sony WH-1000XM4",
    price: "349.99",
    aosDelay: "0",
    videoUrl: "https://www.youtube.com/embed/T0ht1uAlKlU"
  },
  {
    id: 2,
    img: Img2,
    title: "Apple Watch Series 8",
    price: "399.00",
    aosDelay: "200",
    videoUrl: "https://www.youtube.com/embed/kTpc5SoBVu0"
  },
  {
    id: 3,
    img: Img3,
    title: "Bose QuietComfort 35 II",
    price: "299.99",
    aosDelay: "400",
    videoUrl: "https://www.youtube.com/embed/kTpc5SoBVu0"
  },
  {
    id: 4,
    img: Img4,
    title: "Apple AirPods Pro",
    price: "249.00",
    aosDelay: "600",
    videoUrl: "https://www.youtube.com/embed/kTpc5SoBVu0"
  },
];
const ProductsData2 = [
  {
    id: 1,
    img: Img5,
    title: "Sennheiser Momentum 3 Wireless",
    price: "399.95",
    aosDelay: "0",
    videoUrl: "https://www.youtube.com/embed/kTpc5SoBVu0"
  },
  {
    id: 2,
    img: Img6,
    title: "Jabra Elite 85h",
    price: "249.99",
    aosDelay: "200",
    videoUrl: "https://www.youtube.com/embed/kTpc5SoBVu0"
  },
  {
    id: 3,
    img: Img7,
    title: "Beats Solo Pro",
    price: "299.95",
    aosDelay: "400",
    videoUrl: "https://www.youtube.com/embed/kTpc5SoBVu0"
  },
  {
    id: 4,
    img: Img5,
    title: "Anker Soundcore Life Q20",
    price: "59.99",
    aosDelay: "600",
    videoUrl: "https://www.youtube.com/embed/kTpc5SoBVu0"
  },
];
const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Otros Productos" subtitle={"Explore otros productos"} />
        {/* Body section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
      </div>
      <div>
      <iframe
          width="100%"
          height="400px"
          src="https://www.youtube.com/embed/4yRpJFBlG-Q"
          title="Movie Trailer"
          style={{ border: "none" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Products;
