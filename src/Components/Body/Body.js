import React, { useState } from "react";
import axios from "axios";
import "./Body.css";
import Navbar from "../Navbar/Navbar";
const Body = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      Email: email,
      Message: message,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/23e09a58-6464-4efa-a448-71d86e63ba39",
        data
      )
      .then((response) => {
        console.log(response);
        setName("");
        setEmail("");
        setMessage("");
      });
  };
  return (
    <div>
      <Navbar />
      <div className="Main-container">

      {/* -------------------This is Home Section -----------------*/}
        <div id="home" className="BodyMainDiv">
          <main class="container">
            <p className="BodyHeading">Hello I'm</p>
            <section class="animation">
              <div class="first">
                <div>Jayesh Tambat</div>
              </div>
              <div class="second">
                <div>React Developer</div>
              </div>
              <div class="third">
                <div>Figma Designer</div>
              </div>
            </section>
          </main>
          <div className="resumeDiv">
            <p>
              Focused React Developer and Figma Designer known for designing
              efficient and easy-to-use interfaces for industry clients.
            </p>
          </div>
        </div>

        {/* -------------------This is About Section -----------------*/}
        <div id="about" className="BodyAboutMainDiv">
          <div className="BodyProfileDiv">
            <img className="profilePhoto" src="./images/Profile.jpg" />
            <a href="./images/Resume.pdf" download className="resumebtn">
              Download resume
            </a>
          </div>
          <div className="BodyAboutDiv">
            <p className="aboutheading">
              About Me<span>.</span>
            </p>
            <div className="AboutSubDiv">
              <p className="AboutSubHeading">Hi I'm Jayesh</p>
              <p className="AboutInfo">
                I have experience in both React development and Figma design,
                indicating my versatility in both technical and design aspects
                of web development. As a React developer, I had work with the
                React library to build user interfaces and develop web
                applications. My skills include working with components,
                managing state, and utilizing JSX syntax. As a Figma designer, I
                use the Figma design tool to create visually appealing and
                user-friendly interfaces, collaborating with others to create
                wireframes, prototypes, and design components.
              </p>
            </div>
          </div>
        </div>

        {/* -------------------This is Skill Section -----------------*/}
        <div className="tabtitles">
          <p className="tablinks">
            My Skills<span>.</span>
          </p>
          <div className="skills-div">
            <p>HTML5</p>
            <p>CSS3</p>
            <p>JavaScript</p>
            <p>ES6</p>
            <p>ReactJS</p>
            <p>Figma</p>
            <p>JIRA</p>
            <p>BitBucket</p>
          </div>
        </div>

        {/* -------------------This is Education & Experience Section -----------------*/}
        <div id="education-experience" className="education-experience-div">
          <div className="education-div">
            <p className="tablinks">
              Education<span>.</span>
            </p>
            <div className="education-info">
              <p className="passing-year">
                2021 - 2023<span>Master of Computer applications</span>
              </p>
              <p className="collge-name">
                Gokhale Education Society's R. H. Sapat College of Engineering,
                Management Studies and Research, Nashik.
              </p>
              <p className="passing-year">
                2018 - 2021<span>Bachelor of Science</span>
              </p>
              <p className="collge-name">
                Bhusawal Arts, Science & P. O. Nahata Commerce College,
                Bhusawal.
              </p>
              <p className="passing-year">
                2016 - 2018<span>HSC</span>
              </p>
              <p className="collge-name">
                Bhusawal Arts, Science & P. O. Nahata Commerce College,
                Bhusawal.
              </p>
            </div>
          </div>
          <div className="experience-div">
            <p className="tablinks">
              Experience<span>.</span>
            </p>
            <div className="experience-info">
              <p className="passing-year">
                Sep-2022 - June-2023<span>Intern React Developer</span>
              </p>
              <p className="collge-name">Zon SoftTech, Nashik.</p>
              <p className="passing-year">
                Feb-2023 - June-2023<span>Internship at college</span>
              </p>
              <p className="collge-name">
                Gokhale Education Society's R. H. Sapat College of Engineering,
                Management Studies and Research, Nashik.
              </p>
            </div>
          </div>
        </div>

        {/* -------------------This is Projects Section -----------------*/}
        <div id="projects">
          <div className="Projectcontainer">
            <p className="Projectheading">
              My Projects<span>.</span>
            </p>
            <div className="work-list">
              <div className="work">
                <img src="./images/MCA.png" />
                <div className="layer">
                  <h2>MCA Control Panel</h2>
                  <p>
                    This is a PHP based web application developed for college
                    department. For this project I created a figma design and
                    also worked on HTML, CSS, Bootstrap and MySQL.
                  </p>
                </div>
              </div>
              <div className="work">
                <img src="./images/ZonSoftTech.png" />
                <div className="layer">
                  <h2>ZonSoftTech Website</h2>
                  <p>
                    On this project I worked as a designer. For designing I used
                    Figma to convert clients requirements into wireframes to
                    improve user experience.
                  </p>
                </div>
              </div>
              <div className="work">
                <img src="./images/Orthosoft.png" />
                <div className="layer">
                  <h2>Orthosoft Web Application</h2>
                  <p>
                    On this project I worked as a designer as well as
                    developer. As a designer I created a running prototype of
                    this web application and as a developer works on Material-UI components.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------This is contact section -----------------*/}
        <div id="contact">
          <div className="contactContainer">
            <div className="row">
              <div className="contact-left">
                <h2 className="Contactheading">
                  Contact me<span>.</span>
                </h2>
                <p>
                  <img className="mail-and-call" src="./images/mail.png" />
                  tambatjayesh26@gmail.com
                </p>
                <p>
                  <img className="mail-and-call" src="./images/call.png" />
                  +91 9028241546
                </p>
                <a href="https://www.linkedin.com/in/jayesh-tambat-549881251">
                  <img className="contactLogo" src="./images/linkedinB.png" />
                </a>
                <a href="https://www.instagram.com/jayesh_tambat/">
                  <img className="contactLogo" src="./images/instagramB.png" />
                </a>
                <a href="https://github.com/Jayesh-Tambat/My_Repository">
                  <img className="contactLogo" src="./images/gitB.png" />
                </a>
              </div>
              <div className="contact-right">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                  <input
                    type="text"
                    name="message"
                    placeholder="Your Message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  ></input>
                  <button className="resumebtn1" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------This is Thank You Section -----------------*/}
        <div className="thank-you">
          <p>Thank You for Visiting....</p>
        </div>
        
        {/* -------------------This is Copyright Section -----------------*/}
        <div className="copyright">
          <p>Copyright @ Jayesh .V. Tambat. Created in React. </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
