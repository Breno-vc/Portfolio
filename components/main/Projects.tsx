"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Projects = () => {
  const projects = [
    {
      src: "/NextWebsite.png",
      title: "Modern Next.js Portfolio",
      description: "Projeto 1",
      key: "slide1",
    },
    {
      src: "/breno_consultoria.png",
      title: "Site responsivo de consultoria financeira",
      description:
        "Site desenvolvido a partir de um freelance, modelo real utiliza react, tailwind, typescript, spring e outras tecnologias.",
      key: "slide2",
    },
    {
      src: "/SpaceWebsite.png",
      title: "Porfolio interativo e responsivo",
      description:
        "Feito utilizando react, tailwind, typescript, swiper e outras tecnologias e bibliotecas.",
      key: "slide3",
    },
  ];
  const swiper = useSwiper();
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
        id="projetos"
      >
        Meus Projetos
      </h1>
      <div className="h-full flex flex-col md:flex-row w-[1600px] swiper-container swiper-clickable">
        <Swiper
          modules={[Navigation, Keyboard]}
          spaceBetween={15}
          slidesPerView={2}
          navigation={true}
          keyboard={true}
          slideToClickedSlide={true}
          className="mySwiper"
        >
          {projects.map((obj) => {
            return (
              <SwiperSlide>
                <ProjectCard
                  key={obj.key}
                  src={obj.src}
                  title={obj.title}
                  description={obj.description}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
