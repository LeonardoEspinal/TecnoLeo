import React from "react";
import Heading from "../Shared/Heading";

// import images
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    title: "Cómo elegir el reloj inteligente perfecto",
    subtitle:
      "Para elegir el reloj inteligente perfecto, considera tus necesidades, presupuesto y compatibilidad con tu smartphone, y revisa reseñas para decidir correctamente.",
    published: "Jun 16, 2024 by Alan",
    image: Img1,
    aosDelay: "0",
  },
  {
    title: "Cómo elegir el gadget perfecto",
    subtitle:
      "Para elegir el gadget perfecto, investiga las características clave, compara opciones y verifica la compatibilidad. Prioriza calidad, durabilidad y facilidad de uso.",
    published: "Jun 16, 2024 by Samir",
    image: Img2,
    aosDelay: "200",
  },
  {
    title: "Cómo elegir los auriculares VR perfectos",
    subtitle:
      "Para elegir auriculares VR, busca compatibilidad, excelente audio, comodidad, buen aislamiento de ruido, un micrófono de calidad, y durabilidad dentro de tu presupuesto.",
    published: "Jun 16, 2024 by Sergii",
    image: Img3,
    aosDelay: "400",
  },
];
const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* Header section */}
        <Heading title="Noticias Recientes" subtitle={"Explora estos blogs"} />

        {/* Blog section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog card */}
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.title}
              className="bg-white dark:bg-gray-900"
            >
              {/* image section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              {/* content section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
