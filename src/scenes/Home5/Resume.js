import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { FaArrowDown } from "react-icons/fa";

// Components
import ProgressBar from "../../components/common/ProgressBar";

const skills = [
    {
        title: "Web Design",
        percent: 50,
    },
    {
        title: "Animation",
        percent: 70,
    },
    {
        title: "Graphic Design",
        percent: 60,
    },
    {
        title: "Creativity",
        percent: 90,
    },
    {
        title: "Screenwriting",
        percent: 65,
    },
    {
        title: "Videography",
        percent: 75,
    },
];
const education = [
    {
        title: "Full Stack Web Development at The University of North Carolina at Chapel Hill",
        subtitle: "Bootcamp Certificate | Remote",
        description: "A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node.js, MySQL, MongoDB, Express, Handlebars.js & React.js.",
        date: "(2020-2021)",
        icon: "ti-cup",
    },
    {
        title: "UCLA Extension",
        subtitle: "Bootcamp Certificates | Remote",
        description: "A continuing education institution for taking individual courses or certificate programs. Completed After Effects for Filmmakers: An Introductory Workshop, currently enrolled in Design Software Intensive Bootcamp (Illustrator, Photoshop, Indesign).",
        date: "(2020-)",
        icon: "ti-ruler-alt-2",
    },
    {
        title: "University of North Carolina at Chapel Hill",
        subtitle: "Bachelor of Arts | Chapel Hill, NC",
        description: "Communications Studies (Media Production) and with a second major in Asian Studies with a minor in Screenwriting. Graduated with Honors and the Rick Dees Scholarship Award.",
        date: "(2016-20)",
        icon: "ti-crown",
    }
];
const experience = [
    {
        title: "Videographer & Editor",
        subtitle: "North Carolina Football Club | Cary, NC",
        description: "Capturing special content and match highlights for women and men’s professional soccer teams. Attending matches to film and working in post-production making reels and reports. Managing team YouTube channels and recording sound for team adverts, as well as filming press conferences and ICC/World Cup player coverage.",
        date: "(2019-)",
        icon: "ti-pencil-alt",
    },
    {
        title: "Creative Team",
        subtitle: "UNiCorn KPOP Dance Crew | Chapel Hill, NC",
        description: "Directing student dance films by filming and editing choreography videos. Posing as alumni editing instructor for new editors during COVID-19.",
        date: "(2019-)",
        icon: "ti-heart",
    },
    {
        title: "Film Development Intern",
        subtitle: "Pressman Film | Los Angeles, LA",
        description: "Facilitated social media management of company accounts and pitch deck development for film project proposals. Assessed and completed dozens of script coverages and transcribed company phone calls.",
        date: "(2020-2020)",
        icon: "ti-paint-bucket",
    },
];

function Resume() {
    return (
        <section className="section section-resume section-resume-1">
            <div className="display-spacing">
                <header className="el-heading el-heading-center">
                    <div className="el-icon">
                        <h2 className="el-icon-title">
                            <span>RESUME</span>
                        </h2>
                    </div>
                    <h3>Education & Experience</h3>
                    < FaArrowDown className="icon ti-arrow-down" />
                    <h6><a href="/assets/images/hero/Resume.pdf">Download My Full Resume</a></h6>
                    <div className="divider divider-1-reverse divider-1-1"></div>
                    <div className="divider divider-1-reverse divider-1-2"></div>
                </header>
                <Container className="mb-spacing">
                    <Row>
                        <Col md={6}>
                            <div className="resume-row">
                                <h4 className="resume-title">Education</h4>
                                <ul>
                                    {education.map((item, index) => (
                                        <li key={index}>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <div className="el-icon">
                                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <h6>
                                                        {item.subtitle} <small>{item.date}</small>
                                                    </h6>
                                                </div>
                                                <div className="resume-body">
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="resume-row">
                                <h4 className="resume-title">Experience</h4>
                                <ul>
                                    {experience.map((item, index) => (
                                        <li key={index}>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <div className="el-icon">
                                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <h6>
                                                        {item.subtitle} <small>{item.date}</small>
                                                    </h6>
                                                </div>
                                                <div className="resume-body">
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        {skills.map((item, index) => (
                            <Col key={index} sm={6} xl={4}>
                                <div className="skills-item">
                                    <ProgressBar label={item.title} percent={item.percent} />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Resume;
