import React from 'react';
import { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import StyledButton from './components/StyledButton';
import ProjectElement from './components/ProjectElement';
import AboutElement from './components/AboutElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUser, faPersonHiking, faMedal, faHouse, faHammer, faEnvelope, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import data from './data.json';

function App({ currentPage, setCurrentPage }) {
  const user = data.user;
  const settings = data.settings
  const projects = data.projects;

  const homePage = useRef(null);
  const aboutPage = useRef(null);
  const projectsPage = useRef(null);
  const contactPage = useRef(null);

  const [activeSection, setActiveSection] = useState(null);
  const [viewAll, setViewAll] = useState(false);
  const [viewOthers, setViewOthers] = useState(false);

  const hasOtherProjects = projects.some(project => project.type !== undefined);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(homePage.current);
    observer.observe(aboutPage.current);
    observer.observe(projectsPage.current);
    observer.observe(contactPage.current);

    return () => observer.disconnect();
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  return (
    <>
      {/* Navigation */}
      <div id="navigation" className="d-flex flex-column justify-content-between gap-4 w-auto position-fixed top-50 mt-3">
        <button className={activeSection === 'homePage' ? 'active' : ''} onClick={() => homePage.current.scrollIntoView({ behavior: 'smooth' })}><FontAwesomeIcon icon={faHouse} fontSize={30} /></button>
        <button className={activeSection === 'aboutPage' ? 'active' : ''} onClick={() => aboutPage.current.scrollIntoView({ behavior: 'smooth' })}><FontAwesomeIcon icon={faCircleUser} fontSize={30} /></button>
        <button className={activeSection === 'projectsPage' ? 'active' : ''} onClick={() => projectsPage.current.scrollIntoView({ behavior: 'smooth' })}><FontAwesomeIcon icon={faHammer} fontSize={30} /></button>
        <button className={activeSection === 'contactPage' ? 'active' : ''} onClick={() => contactPage.current.scrollIntoView({ behavior: 'smooth' })}><FontAwesomeIcon icon={faEnvelope} fontSize={30} /></button>
      </div>

      {/* Home */}
      <div ref={homePage} id='homePage' className="page row">
        <div className="col-lg-6 d-flex flex-column justify-content-center gap-5">
          <h1 className='title'>Achievement is built on <span className='mainColor fst-italic'>dedication</span> {currentPage.pageName} </h1>
          <span>
            <p className='largeText'>Hello, I am Miguel Brugge a professional software developer!</p>
            <p>I am 20 years old and live in Zeeland. I work critically and enjoy helping others. I'm currently studying to become a Software Developer because I love coding. My goal is to become a skilled Software Developer and create anything I need.</p>
          </span>
          <StyledButton text="Let's talk" onClick={() => contactPage.current.scrollIntoView({ behavior: 'smooth' })} />
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-end">
          <div className="imageContainer position-relative">
            <img className='mainPicture position-absolute' src="images/MainPicture.png" alt="main" />
            <div className="mainPictureShadow position-absolute"></div>
          </div>
        </div>
        <hr className="line position-absolute"></hr>
      </div>

      {/* About me */}
      <div ref={aboutPage} id='aboutPage' className="page">
        <h1 className='text-center title'>About me</h1>
        <div className="row justify-content-between position-relative gap-5">
          <hr className="line lineTop position-absolute"></hr>
          <AboutElement icon={faUser} title="Myself" description="Learn more about my hobbies and teamroles." onClick={() => setCurrentPage("Myself")} />
          <AboutElement icon={faPersonHiking} title="Experience" description="Find out why I chose this career path and how it is going so far." onClick={() => setCurrentPage("Experience")} />
          <AboutElement icon={faMedal} title="Skills" description="Find out what kinds of skills I posess." onClick={() => setCurrentPage("Skills")} />
          <hr className="line lineBottom position-absolute"></hr>
        </div>
      </div>

      {/* Projects */}
      <div ref={projectsPage} id='projectsPage' className="page position-relative">
        <h1 className='text-center title'>Projects</h1>
        <div className="row gap-5 justify-content-center">
          {projects.slice(0, viewAll ? projects.length : settings.maxProjects).filter(project => viewOthers || project.type === undefined).map((project, index) => (
            <ProjectElement
              key={index}
              project={project}
              setCurrentPage={() => setCurrentPage(index)}
            />
          ))}
        </div>
        <div className="d-flex">
          {projects.length != settings.maxProjects && !viewOthers ? <StyledButton text={viewAll ? "View less" : "View all"} className="px-5 mx-auto mt-4" onClick={() => setViewAll(!viewAll)} /> : ""}
          {viewAll && hasOtherProjects ? <StyledButton text={viewOthers ? "View related projects" : "View non related projects"} className="px-5 mx-auto mt-4" onClick={() => setViewOthers(!viewOthers)} /> : ""}
        </div>
        <hr className="line lineLeft position-absolute"></hr>
        <hr className="line lineRight position-absolute"></hr>
      </div>

      {/* Contact */}
      <div ref={contactPage} id='contactPage' className="page row justify-content-between">
        <div className="col-md-4 my-auto px-2 text-center">
          <FontAwesomeIcon icon={faPaperPlane} fontSize={200} className='mb-4' />
          <span className='text-start'>
            <h1>Get in touch</h1>
            <h5>I'd love to hear from you!</h5>
          </span>
          <hr />
          <div id='socials' className="d-flex justify-content-between px-5 mt-5">
            <FontAwesomeIcon icon={faLinkedin} fontSize={50} onClick={() => window.open(user.linkedIn, '_blank')} />
            <FontAwesomeIcon icon={faGithubSquare} fontSize={50} onClick={() => window.open(user.github, '_blank')} />
            <FontAwesomeIcon icon={faTwitterSquare} fontSize={50} onClick={() => window.open(user.twitter, '_blank')} />
            <FontAwesomeIcon icon={faInstagramSquare} fontSize={50} onClick={() => window.open(user.instagram, '_blank')} />
          </div>
        </div>
        <div className="col-md-6 my-auto">
          <label>Name</label>
          <input id='nameInput' className='mb-3' type="text" />
          <label>Subject</label>
          <input id='subjectInput' className='mb-3' type="text" />
          <label>Message</label>
          <textarea id='messageInput' type="text" rows={5} />
          <StyledButton className="float-end mt-4" text='Send' onClick={() => {
            const nameInput = document.getElementById('nameInput');
            const subjectInput = document.getElementById('subjectInput');
            const messageInput = document.getElementById('messageInput');

            const name = encodeURIComponent(nameInput.value);
            const subject = encodeURIComponent(subjectInput.value);
            const message = encodeURIComponent(messageInput.value);

            const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${user.email}&su=${subject}&body=From ${name},%0A%0A${message}`;

            window.open(mailtoLink, '_blank');
          }} />
        </div>
      </div>
    </>
  )
}

export default App
