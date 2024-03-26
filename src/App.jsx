import { useState } from "react";
import Profile from "./assets/Photo.png";
import ProfileBg from "./assets/small.png";
import Project1 from "./assets/project2.png";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="container m-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Habib portofolio</h1>
            </div>
            <div>
              <ul className="flex gap-3">
                <li>
                  <a
                    href=""
                    className="text-gray-400 hover:t
                  ext-white cursor-pointer"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-400 hover:t
                  ext-white cursor-pointer"
                  >
                    skills
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-400 hover:t
                  ext-white cursor-pointer"
                  >
                    about me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        {/* banner */}
        <section>
          <div className="container m-auto px-4 py-6 flex gap-6">
            <div>
              <h2 className="font-bold text-4xl">Habib Rifqi</h2>
              <h2 className="font-bold text-4xl  bg-gradient-to-t from-blue-500 to-cyan-500 text-transparent bg-clip-text">
                Sofware Engineer
              </h2>
              <p className="mt-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                veniam magni ipsum eveniet neque minus illum quod nobis
                architecto eaque voluptatum sint harum expedita iusto quis,
                deleniti maxime officiis incidunt?
              </p>
            </div>
            <div className="relative">
              <img src={Profile} className="relative z-10" width={520} />
              <img
                src={ProfileBg}
                className="absolute top-0 left-12 z-0"
                alt=""
              />
            </div>
          </div>
        </section>
        {/* banner end */}
        {/* projects */}
        <section>
          <div className="container m-auto">
            <h2>Projects</h2>
            <div className="flex">
              <div>
                <img src={Project1} alt="" />
              </div>
              <div></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
