import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Carousel, { Modal, ModalGateway } from "react-images";
import project1image from "../../assets/images/portfolio/5-5.jpg";
import project2image from "../../assets/images/portfolio/5-2.jpg";
import project3image from "../../assets/images/portfolio/5-3.jpg";
import project4image from "../../assets/images/portfolio/5-4.jpg";
import project5image from "../../assets/images/portfolio/5-1.jpg";
import project6image from "../../assets/images/portfolio/5-6.jpg";
import project7image from "../../assets/images/portfolio/5-7.jpg";
import project8image from "../../assets/images/portfolio/5-8.jpg";
import project9image from "../../assets/images/portfolio/5-9.jpg";
import project10image from "../../assets/images/portfolio/5-10.jpg";
import project11image from "../../assets/images/portfolio/5-11.jpg";
import project12image from "../../assets/images/portfolio/5-12.jpg";

// Components
import Headline from "../../components/common/Headline";

const portfolio = [
    {
        name: "All Works",
        items: [
            {
                id: 0,
                title: "strwbry mylk x bang sangho",
                subtitle: "AE/PS Sample Intro Clip",
                src: project1image,
                thumbnail: project1image,
            },
            {
                id: 1,
                title: "Workout Tracker",
                link: "/portfolio-details",
                subtitle:
                <a
                    class="nav-link"
                    href="https://hidden-shelf-72114.herokuapp.com/" target="_blank"
                    >Deployed Site
                </a>,
                subtitle2:
                <a
                    class="nav-link"
                    href="https://github.com/ebsizzlin/workoutTracker" target=" blank"
                    >GitHub Repo
                </a>,
                src: project2image,
                thumbnail: project2image,
            },
            {
                id: 2,
                title: "Film Stache",
                link: "/portfolio-details",
                subtitle:
                <a
                    class="nav-link"
                    href="https://project2group9app.herokuapp.com/" target="_blank"
                    >Deployed Site
                </a>,
                subtitle2:
                <a
                    class="nav-link"
                    href="https://github.com/pdnarmi/project2GroupRepo" target=" blank"
                    >GitHub Repo
                </a>,
                src: project3image,
                thumbnail: project3image,
            },
            {
                id: 3,
                title: "Note Taker",
                subtitle:
                <a
                    class="nav-link"
                    href="https://mighty-sea-08531.herokuapp.com/" target="_blank"
                    >Deployed Site
                </a>,
                subtitle2:
                <a
                    class="nav-link"
                    href="https://github.com/ebsizzlin/noteTaker" target=" blank"
                    >GitHub Repo
                </a>,
                link: "/portfolio-details",
                src: project4image,
                thumbnail: project4image,
            },
            {
                id: 4,
                title: "Eat Da Burger",
                link: "https://radiant-ridge-31259.herokuapp.com/",
                subtitle:
                <a
                    class="nav-link"
                    href="https://mighty-sea-08531.herokuapp.com/" target="_blank"
                    >Deployed Site
                </a>,
                subtitle2:
                <a
                    class="nav-link"
                    href="https://github.com/ebsizzlin/burger" target=" blank"
                    >GitHub Repo
                </a>,
                src: project5image,
                thumbnail: project5image,
            },
            {
                id: 5,
                title: "Oh Marcello",
                subtitle: "Student MV, Color Experiment",
                subtitle2:
                <a
                class="nav-link"
                href="https://youtu.be/W4KHF_iB4_o" target=" blank"
                >[YouTube]
                </a>,
                link: "/portfolio-details",
                src: project6image,
                thumbnail: project6image,
            },
            {
                id: 6,
                title: "No New Friends",
                subtitle: "AE MV Composite",
                subtitle2:
                <a
                class="nav-link"
                href="https://youtu.be/ITzrs38jky0" target=" blank"
                >[YouTube]
                </a>,
                link: "/portfolio-details",
                src: project7image,
                thumbnail: project7image,
            },
            {
                id: 7,
                title: "Animation Logo",
                subtitle: "Expo Logo Mock-Up",
                link: "/portfolio-details",
                src: project8image,
                thumbnail: project8image,
            },
            {
                id: 8,
                title: "Animation Logo Pattern",
                subtitle: "Expo Merch Mock-Up",
                link: "/portfolio-details",
                src: project9image,
                thumbnail: project9image,
            },
            {
                id: 9,
                title: "strwbry mylk logo",
                subtitle: "Beat Maker's Logo Design",
                link: "/portfolio-details",
                src: project10image,
                thumbnail: project10image,
            },
            {
                id: 10,
                title: "Budget Tracker",
                subtitle:
                <a
                    class="nav-link"
                    href="https://agile-sea-97418.herokuapp.com/" target="_blank"
                    >Deployed Site
                </a>,
                subtitle2:
                <a
                    class="nav-link"
                    href="https://github.com/ebsizzlin/budgetTracker" target=" blank"
                    >GitHub Repo
                </a>,
                link: "/portfolio-details",
                src: project11image,
                thumbnail: project11image,
            },
            {
                id: 11,
                title: "Game Guide",
                subtitle:
                <a
                    class="nav-link"
                    href="https://bcummings32.github.io/Project-1-Soccer-Scores/" target="_blank"
                    >Deployed Site
                </a>,
                subtitle2:
                <a
                    class="nav-link"
                    href="https://github.com/Bcummings32/Project-1-Soccer-Scores" target=" blank"
                    >GitHub Repo
                </a>,
                link: "/portfolio-details",
                src: project12image,
                thumbnail: project12image,
            },
        ],
    },
    {
        name: "Web Design",
        items: [
            {
                id: 0,
                title: "Eat Da Burger",
                link: "https://radiant-ridge-31259.herokuapp.com/",
                subtitle:
                <a
                    class="nav-link"
                    href="https://mighty-sea-08531.herokuapp.com/" target="_blank"
                    >Deployed Site
                </a>,
                subtitle2:
                <a
                    class="nav-link"
                    href="https://github.com/ebsizzlin/burger" target=" blank"
                    >GitHub Repo
                </a>,
                src: project5image,
                thumbnail: project5image,
            },
            {
                id: 1,
                title: "Workout Tracker",
                link: "/portfolio-details",
                subtitle:
                <a
                    class="nav-link"
                    href="https://hidden-shelf-72114.herokuapp.com/" target="_blank"
                    >Deployed Site
                </a>,
                subtitle2:
                <a
                    class="nav-link"
                    href="https://github.com/ebsizzlin/workoutTracker" target=" blank"
                    >GitHub Repo
                </a>,
                src: project2image,
                thumbnail: project2image,
            },
            {
                id: 2,
                title: "Film Stache",
                link: "/portfolio-details",
                subtitle:
                <a
                    class="nav-link"
                    href="https://project2group9app.herokuapp.com/" target="_blank"
                    >Deployed Site
                </a>,
                subtitle2:
                <a
                    class="nav-link"
                    href="https://github.com/pdnarmi/project2GroupRepo" target=" blank"
                    >GitHub Repo
                </a>,
                src: project3image,
                thumbnail: project3image,
            },
            {
                id: 3,
                title: "Note Taker",
                subtitle:
                <a
                    class="nav-link"
                    href="https://mighty-sea-08531.herokuapp.com/" target="_blank"
                    >Deployed Site
                </a>,
                subtitle2:
                <a
                    class="nav-link"
                    href="https://github.com/ebsizzlin/noteTaker" target=" blank"
                    >GitHub Repo
                </a>,
                link: "/portfolio-details",
                src: project4image,
                thumbnail: project4image,
            },
            {
                id: 4,
                title: "Budget Tracker",
                subtitle:
                <a
                    class="nav-link"
                    href="https://agile-sea-97418.herokuapp.com/" target="_blank"
                    >Deployed Site
                </a>,
                subtitle2:
                <a
                    class="nav-link"
                    href="https://github.com/ebsizzlin/budgetTracker" target=" blank"
                    >GitHub Repo
                </a>,
                link: "/portfolio-details",
                src: project11image,
                thumbnail: project11image,
            },
            {
                id: 11,
                title: "Game Guide",
                subtitle:
                <a
                    class="nav-link"
                    href="https://bcummings32.github.io/Project-1-Soccer-Scores/" target="_blank"
                    >Deployed Site
                </a>,
                subtitle2:
                <a
                    class="nav-link"
                    href="https://github.com/Bcummings32/Project-1-Soccer-Scores" target=" blank"
                    >GitHub Repo
                </a>,
                link: "/portfolio-details",
                src: project12image,
                thumbnail: project12image,
            },
        ],
    },
    {
        name: "Videography & Editing",
        items: [
            {
                id: 4,
                title: "strwbry mylk x bang sangho",
                subtitle: "AE/PS Sample Intro Clip",
                link: "/portfolio-details",
                src: project1image,
                thumbnail: project1image,
            },
            {
                id: 5,
                title: "Oh Marcello",
                subtitle: "Student MV, Color Experiment",
                subtitle2:
                <a
                class="nav-link"
                href="https://youtu.be/W4KHF_iB4_o" target=" blank"
                >[YouTube]
                </a>,
                link: "/portfolio-details",
                src: project6image,
                thumbnail: project6image,
            },
            {
                id: 6,
                title: "No New Friends",
                subtitle: "AE MV Composite",
                subtitle2:
                <a
                class="nav-link"
                href="https://youtu.be/ITzrs38jky0" target=" blank"
                >[YouTube]
                </a>,
                link: "/portfolio-details",
                src: project7image,
                thumbnail: project7image,
            },
        ],
    },
    {
        name: "Graphic Design",
        items: [
            {
                id: 7,
                title: "Animation Logo",
                subtitle: "Expo Logo Mock-Up",
                link: "/portfolio-details",
                src: project8image,
                thumbnail: project8image,
            },
            {
                id: 8,
                title: "Animation Logo Pattern",
                subtitle: "Expo Merch Mock-Up",
                link: "/portfolio-details",
                src: project9image,
                thumbnail: project9image,
            },
            {
                id: 9,
                title: "strwbry mylk logo",
                subtitle: "Beat Maker's Logo Design",
                link: "/portfolio-details",
                src: project10image,
                thumbnail: project10image,
            },
        ],
    },
];

const images = [
    {
        src: "/assets/images/portfolio/5-1.jpg",
    },
    {
        src: "/assets/images/portfolio/5-2.jpg",
    },
    {
        src: "/assets/images/portfolio/5-3.jpg",
    },
    {
        src: "/assets/images/portfolio/5-4.jpg",
    },
    {
        src: "/assets/images/portfolio/5-5.jpg",
    },
    {
        src: "/assets/images/portfolio/5-6.jpg",
    },
    {
        src: "/assets/images/portfolio/5-7.jpg",
    },
    {
        src: "/assets/images/portfolio/5-8.jpg",
    },
    {
        src: "/assets/images/portfolio/5-9.jpg",
    },
    {
        src: "/assets/images/portfolio/5-10.jpg",
    },
    {
        src: "/assets/images/portfolio/5-11.jpg",
    },
    {
        src: "/assets/images/portfolio/5-12.jpg",
    },
];

function Portfolio() {
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const toggleLightbox = (index) => {
        setSelectedIndex(index);
        setLightboxIsOpen(!lightboxIsOpen);
    };

    return (
        <section className="section section-portfolio section-portfolio-1">
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="Portfolio" title="Let's See My Work" divider_1={true} position="center" />
                    <Tabs className="el-tabs el-tabs-1" selectedTabClassName="active">
                        <TabList className="el-tabs-links">
                            {portfolio.map((category, categoryIndex) => (
                                <Tab key={categoryIndex}>{category.name}</Tab>
                            ))}
                        </TabList>
                        {portfolio.map((category, categoryIndex) => (
                            <TabPanel key={categoryIndex}>
                                <Row className="row-center mb--30">
                                    {category.items.map((item, index) => (
                                        <Col key={index} xs={6} sm={6} md={6} lg={3} xl={3} onClick={() => toggleLightbox(item.id)}>
                                            <div className="portfolio-item">
                                                <div className="portfolio-card">
                                                    <div className="image overlay-image" style={{ backgroundImage: `url(${item.src})` }} />
                                                    {/* <img className="image overlay-image" src={item.src}/> */}
                                                    <div className="content">
                                                        <button className="button button-circle button-icon button-circle-md button-primary">
                                                            <span className="el-icon-icon ti-fullscreen"></span>
                                                        </button>
                                                        <span>{item.title}</span>
                                                        <h3>{item.subtitle}</h3>
                                                        <h3>{item.subtitle2}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </TabPanel>
                        ))}
                    </Tabs>
                </Container>
                <ModalGateway>
                    {lightboxIsOpen ? (
                        <Modal onClose={toggleLightbox}>
                            <Carousel currentIndex={selectedIndex} views={images} />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </section>
    );
}

export default Portfolio;
