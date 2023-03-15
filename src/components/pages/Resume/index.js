import React from 'react';
import './style.css';


export const Resume = () => {

  const resumeBtn = () => {
    // using Java Script method to get PDF file
    fetch('Resume.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'PDFresume';
        alink.click();
      })
    })
  }

  return (
    <div className='resume-box'>
      <div className='you-can'>
        <h3 >You may download my resume here:</h3>
        <button className='resumeButton' onClick={resumeBtn}>Resume</button>
      </div>

      <div className='resume-list'>

        <div className='front-list'>
          <h4>Front-end Proficiencies</h4>
          <ul className='ul-resume-front'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <br/>
        <div className='back-list'>
          <h4>Back-end Proficiencies</h4>
          <ul className='ul-resume-back'>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  )
}