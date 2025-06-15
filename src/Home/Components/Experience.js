import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";

export default () => {
  const [sectionHover, setSectionHover] = useState("");
  const [majorHover, setMajorHover] = useState(false);

  return (
    <div
      className="experience-container"
      onMouseEnter={() => setMajorHover(true)}
      onMouseLeave={() => setMajorHover(false)}
    >
      <h4>Experience</h4>
      <ExperienceCard
        dates="2024 - PRESENT"
        title="Full Stack Developer"
        subtitle="Storm Games"
        content="At Storm Games, I’ve had the opportunity to lead team projects and work across the entire software development lifecycle. My contributions span frontend projects using TypeScript, React, and Redux; backend APIs built with NestJS, MySQL, and PostgreSQL; and scalable infrastructure using AWS, Kubernetes, CI/CD pipelines, and Terraform."
        skills={["React", "NestJS", "PostgreSQL", "MySQL", "AWS", "Kubernetes"]}
        hover={sectionHover}
        updateHover={(value) => setSectionHover(value)}
        majorHover={majorHover}
      />
      <ExperienceCard
        dates="2024"
        title="Full Stack Developer"
        subtitle="Vape Supplier"
        content="At Vape Supplier, I built new reporting tools using Next.js, Typescript, and Tailwind to track orders, manage stock, and support high-performing projects. I optimized MySQL queries for better reporting performance and improved legacy PHP projects while mentoring junior developers on new features and fixes."
        skills={["React", "NextJS", "PHP", "MySQL"]}
        hover={sectionHover}
        updateHover={(value) => setSectionHover(value)}
        majorHover={majorHover}
      />
      <ExperienceCard
        dates="2020 - 2024"
        title="Full Stack & DevOps Engineer"
        subtitle="matchBetr"
        content="At matchBetr, I was responsible for building the entire project from scratch. A full stack matched betting site, built using the MERN stack. The site provided people with all the tools and tutorials they need to make money from matched betting. This site had oddsmatching software, forums, a mobile app, and much more."
        skills={["React", "React Native", "Node", "Express", "MongoDB", "AWS"]}
        hover={sectionHover}
        updateHover={(value) => setSectionHover(value)}
        majorHover={majorHover}
      />
    </div>
  );
};
