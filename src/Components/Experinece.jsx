import React from "react";
import Title from "./Title";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "./ui/text-reveal-card";

const experiences = [
  {
    company: "SeenIT PYT LTD",
    role: "MERN Stack Developer Intern",
    duration: "May 2024 - Present",
    imgSrc: "/Seenit.jpg",
  },
  {
    company: "HACKWIT TECHNOLOGIES",
    role: "Full Stack Developer Intern",
    duration: "July 2023 - June 2024",
    imgSrc: "/Hackwit.jpg",
  },
  {
    company: "HCL",
    role: "Project Intern",
    duration: "August 2023 - October 2022",
    imgSrc: "/hcl.png",
  },
];

function Experience() {
  return (
    <div>
      <div className="mt-10">
        <Title
          text="Experience"
          className="flex flex-col items-center justify-center -rotate-6"
        />
      </div>
      <div className="">
        {experiences.map((experience, index) => (
          <CardContainer
            key={index}
            containerClassName="my-container-class" // add mb-4 to reduce the gap between cards
          >
            <CardBody className="my-card-body-class">
              <CardItem className="my-card-item-class">
                <img
                  src={experience.imgSrc}
                  alt={`${experience.company} logo`}
                  width={80}
                  height={80}
                  className="object-cover mt-4"
                />
              </CardItem>
              <CardItem className="ml-4 flex flex-col justify-center">
                <div>
                  <h2 className="text-lg">{experience.company}</h2>
                  <p className="text-sm">{experience.role}</p>
                  <p className="text-sm">{experience.duration}</p>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      <div className="flex justify-center">
        <TextRevealCard
           text="Hover Above the text"
           revealText="Tech Enthusiast"
          className="my-card-class"
        >
          <TextRevealCardTitle></TextRevealCardTitle>
          <TextRevealCardDescription></TextRevealCardDescription>
        </TextRevealCard>
      </div>
    </div>
  );
}

export default Experience;
