import React, { useState } from "react";


function Info (props){

  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseEnter (){
    setMouseOver(true);
  }
  function handleMouseLeave(){
    setMouseOver(false);
  }
    return(
    <div class="middle-container">
      <div class="profile" 
           onMouseEnter={handleMouseEnter} 
           onMouseLeave={handleMouseLeave}
           >
           
        <h2>ABOUT ME</h2>
        <hr class="solid my-3"></hr>
        
        {isMouseOver? <p class="intro"><strong>I graduated with Industrial Engineering degree but I recently fall in love with Web Development. Then, I decided to take the online Full Stack Bootcamp at Udemy. I love learning and applying new technologies.</strong></p> :
        <img class="rounded mx-auto d-block rounded-circle profpic"src="images/Auxy.jpeg" alt="Auxymore Profile Picture"/>  } 
      </div>

       <div class="container">
            <h2 class="my-skill">My Skills</h2>
            <hr class="solid my-3"></hr>

             <div class="row">
              <div class="col skill">
                {props.skillSection}
               </div>

               <div class="col skill animated fadeInRightBig delay-2s">
                  <div class="text-center  skilltech-row">
                    <h3 class="font-weight-bold">HTML</h3>
                    <img class="skill-pic" src="./images/Skills_Tech/html5.svg" alt="HTML 5-img"/>
                    <img class="skill-React" src="./images/Skills_Tech/1280px-React-icon.svg.png" alt="JSX-img"/>
                  </div>

                  <div class="text-center skilltech-row">
                    <h3 class="font-weight-bold">CSS</h3>
                    <img class="skill-pic" src="./images/Skills_Tech/css.svg" alt="CSS3-img"/>
                  </div>

                  <div class="text-center skilltech-row">
                    <h3 class="font-weight-bold">Javascript</h3>
                    <img class="skill-pic" src="./images/Skills_Tech/javascript.png" alt="JS-img"/>
                    <img class="skill-React" src="./images/Skills_Tech/1280px-React-icon.svg.png" alt="React-img"/>
                    <img class="skill-pic" src="./images/Skills_Tech/jquery.png" alt="jQuery-img"/>
                    <img class="skill-pic" src="./images/Skills_Tech/nodejs.png" alt="NodeJs-img"/>
                  </div>

                  <div class="text-center skilltech-row">
                    <h3 class="font-weight-bold">Other</h3>
                    <img class="skill-pic" src="./images/Skills_Tech/github.png" alt="Github-img"/>
                    <img class="skill-pic" src="./images/Skills_Tech/heroku.png" alt="Heroku-img"/>
                  </div>
               </div>
              </div>
          </div>

      <div class="contact-me text-center">
        <h2>Get In Touch</h2>
        <hr class="solid my-3"></hr>
        <h3>If you scroll down until here</h3>
        <p class="contact-message">We should collaborate and make things happen.</p>
        <a class="btn btn-outline-dark" href="mailto:guillaume.acho@gmail.com">CONTACT ME</a>
      </div>
    </div>
    )
}

export default Info;

// Modify this section... Create template as above