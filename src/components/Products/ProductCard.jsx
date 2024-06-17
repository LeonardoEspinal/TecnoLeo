import React, { useState } from "react";
import { Button } from "reactstrap";

const ProductCard = ({ data }) => {
    const [showModal, setShowModal] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");

    const handleShowVideo = (url) => {
        setVideoUrl(url);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setVideoUrl("");
    };

    return (
        <div className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
                {/* card section */}
                {data.map((product) => (
                    <div
                        data-aos="fade-up"
                        data-aos-delay={product.aosDelay}
                        className="group"
                        key={product.id}
                    >
                        <div className="relative">
                            <img
                                src={product.img}
                                alt={product.title}
                                className="h-[180px] w-[260px] object-cover rounded-md"
                            />
                            {/* hover buttons */}
                            <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md space-x-2">
                                <Button
                                    color="primary"
                                    className="btn-custom"
                                    onClick={() => alert("Añadido a carrito")}

                                >
                                    Añade a carrito
                                </Button>
                                <Button
                                    color="primary"
                                    className="btn-custom"
                                    onClick={() => handleShowVideo(product.videoUrl)}
                                >
                                    Video
                                </Button>
                            </div>
                        </div>
                        <div className="leading-7 mt-2">
                            <h2 className="font-semibold">{product.title}</h2>
                            <h2 className="font-bold">${product.price}</h2>
                        </div>
                    </div>
                ))}
            </div>
            {/* Modal for video */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-5 rounded-md relative w-3/4 h-3/4">
                        <button
                            className="absolute top-2 right-2 text-black"
                            onClick={handleCloseModal}
                        >
                            X
                        </button>
                        <div className="relative w-full h-full">
                            <iframe
                                src={videoUrl}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductCard;