import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Java EE", ratingPercentage: 100 },
    { skill: "C#", ratingPercentage: 100 },
    { skill: "JSF(Primefaces)", ratingPercentage: 100 },
    { skill: "React", ratingPercentage: 100 },
    { skill: "Node JS", ratingPercentage: 100 },
    { skill: "Mongo Db", ratingPercentage: 100 },
    { skill: "Javascript", ratingPercentage: 100 },
    { skill: "HTML", ratingPercentage: 100 },
    { skill: "CSS", ratingPercentage: 100 },
    { skill: "SQL", ratingPercentage: 100 },
    { skill: "Python", ratingPercentage: 100 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap, NodeJS",
    },
    {
      title: "Ecommerce Website ",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "Online ecommerce website for showcasing and selling products onlne with payment system integration (Stripe) as a final project in my Co-op Program ",
      subHeading:
        "Technologies Used: Mongo DB, Javascript, React Js, Node JS, Redux, Bootstrap, CSS.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Cornerstone International Community College"}
        subHeading={"Web and Mobile Application Development, Vancouver-Canada"}
        fromDate={"2022"}
        toDate={"current"}
      />

       <ResumeHeading
        heading={"Auckland English Academy (ICL) "}
        subHeading={"Auckland-New Zealand"}
        fromDate={"2018"}
        toDate={"2018"}
      /> 

      <ResumeHeading
        heading={"Universidad de Chile, Santiago- Chile"}
        subHeading={"Agile Workshop-Pragmatic approach"}
        fromDate={"2016"}
        toDate={"2016"}
      />
      <ResumeHeading
        heading={"Universidad Catolica Temuco, Chile"}
        subHeading={
          "Bachelor of Computer Science - Software Engineering, Software Development"
        }
        fromDate={"2008"}
        toDate={"2015"}
      />
    </div>,

    /* WORK EXPERIENCE */
    
    <div className="resume-screen-container" key="work-experience">
        <div className="experience-container">
<ResumeHeading
          heading={"OPENRAD - Ophtalmological Clinic, Temuco-Chile "}
          subHeading={"Senior Software Developer"}
          fromDate={"2020"}
          toDate={"2021"}
        />
      

</div>
<div className="experience-container">
<ResumeHeading
          heading={"EVERIS CENTER- BCI Bank, Temuco-Chile "}
          subHeading={"Senior Software Developer / Technical Lead"}
          fromDate={"2017"}
          toDate={"2018"}
        />
       
</div>
      <div className="experience-container">
        <ResumeHeading
          heading={"EVERIS CHILE- LATAM Airlines, Santiago-Chile "}
          subHeading={"Agile Software Developer"}
          fromDate={"2015"}
          toDate={"2017"}
        />
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Gamer"
        description="Gamer on my free time, collaborative role
        with friends, focus on have fun and learn more than win."
      />
      <ResumeHeading
        heading="Enthusiastic Hiker"
        description="Love to expend quality time on outdoors
        activities to connect with nature and
        appreciate the simplicity of things."
      />
      <ResumeHeading
        heading="Music"
        description="I have more than 193,764 minutes listened on my spotify, find a new  new band to enjoy it and also always open to discover new music styles"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
