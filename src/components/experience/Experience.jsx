import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

export default function Experience() {
  return (
    <section id="experience">
      <h5>Professional history</h5>
      <h2>My Experience </h2>
      <div className="container experience__container">
        {/* FRONTEND */}
        <div className="experience__frontend">
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Software Developer Intern | Showing Guide</h4>
                <small className="text-light">Jan 2023 - Apr 2023</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Software Engineer in Training | Coding Temple</h4>
                <small className="text-light">Jun 2022 - Sep 2022</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Software Engineer | TebeP</h4>
                <small className="text-light">May 2020 - Apr 2022</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
