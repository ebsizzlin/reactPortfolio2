import React from "react";
import { Container, Hidden, Row, Col } from "react-grid-system";
import aboutimage from "../../assets/images/about/5-1.png";

function About() {
    return (
        <section className="section section-about section-about-1">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Hidden xs sm md>
                            <Col lg={5}>
                                <div className="contact-about">
                                    <img className="image overlay-image" src={aboutimage} style={{zIndex: -1, backgroundSize: 'cover', width: '100vw', height: '70vh'}}></img>
                                </div>
                            </Col>
                        </Hidden>
                        <Col lg={7}>
                            <div className="about-content">
                                <header className="el-heading">
                                    <h2 className="el-icon">
                                        <span className="el-icon-title">ABOUT ME</span>
                                    </h2>
                                    <h3>
                                        <span>Hey, I'm Ella!</span>
                                    </h3>
                                    <div className="divider divider-1"></div>
                                    <p>Ambitious full-stack coder, motion graphics creator, graphic design student, and freelancing content creator! Currently pursuing animation and animation adjacent fields.</p>    
                                    <p>Experienced in dance, soccer, and skate videography + editing as well as sound mixing for advertisements and student film.</p>
                                </header>
                                <Row className="pt-30">
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-ruler-pencil"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Web Design</h5>
                                                <p>Rookie Full Stack Developer (HTML, CSS, JQuery, JS, MongoDB, Node.js, Express, MySQL, IndexedDB, JSON, AJAX, PWA, Responsive Design, Handlebars, GitHub, Heroku)</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-image"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Graphic Design</h5>
                                                <p>Adobe Illustrator, Adobe Photoshop, Adobe InDesign, Adobe XD, Procreate</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-video-camera"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Videgraphy</h5>
                                                <p>DSLR, Gimbal, preference for motion</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-game"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Motion Graphics</h5>
                                                <p>Adobe Premiere, Adobe After Effects</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-palette"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Animation</h5>
                                                <p>Blender, Adobe After Effects, in process of learning Maya, Z-Brush, C++, and Python</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-music-alt"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Music Production</h5>
                                                <p>Ableton, Reason, Midi Fighter</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default About;
