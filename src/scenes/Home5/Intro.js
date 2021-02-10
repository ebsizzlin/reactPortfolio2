import React from "react";
import TextLoop from "react-text-loop";
import Particles from "react-particles-js";
import { Container } from "react-grid-system";
import backgroundImage from "../../assets/images/hero/5-1.jpg"
import { FaArrowDown } from "react-icons/fa";

function Intro() {
    return (
        <section className="section section-hero section-hero-5 overlay-image" style={{ backgroundImage }}>
            <img src={backgroundImage} style={{zIndex: -1, backgroundSize: 'cover', width: "100vw", height: "100vh"}}/>
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 120,
                            density: {
                                enable: true,
                                value_area: 1500,
                            },
                        },
                        line_linked: {
                            enable: true,
                            opacity: 0.02,
                        },
                        move: {
                            direction: "right",
                            speed: 0.05,
                        },
                        size: {
                            value: 1,
                        },
                        opacity: {
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.05,
                            },
                        },
                    },
                    interactivity: {
                        events: {
                            onclick: {
                                enable: true,
                                mode: "push",
                            },
                        },
                        modes: {
                            push: {
                                particles_nb: 1,
                            },
                        },
                    },
                    retina_detect: true,
                }}
                className="el-particles"
            />
            <div className="display-center">
                <Container>
                    <div className="el-heading">
                        <h1>
                            I'm a{" "}
                            <TextLoop>
                                <span>Web Developer</span>
                                <span>Graphic Designer</span>
                                <span>Animator</span>
                                <span>Videographer</span>
                            </TextLoop>
                            <br />
                            I create Websites and Applications :)
                            <br />
                            Based in the US / France.
                        </h1>
                        <div className="el-icon">
                            <p className="el-icon-title">
                                About Me < FaArrowDown className="icon ti-arrow-down" />
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Intro;
