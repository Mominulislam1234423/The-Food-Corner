import React from "react";
import { Parallax } from "react-parallax";

const SharedCover = ({ img, title, name }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero md:h-[500px] h-[400px]">
        <div className="hero-overlay bg-black/50"></div>

        <div className="hero-content text-neutral-content text-center bg-black opacity-70 p-8 md:px-40 max-w-5xl mx-auto rounded-sm shadow-lg">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold uppercase">{name}</h1>

            <p className="mb-5 text-lg">{title}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default SharedCover;
