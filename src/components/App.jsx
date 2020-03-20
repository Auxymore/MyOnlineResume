import React from 'react';
import Header from './Header';
import Info from "./Info";
import Footer from "./Footer";
import CreateSkill from "./CreateSkill";
import {skills, skillTech} from "../informations";

function App (){

  return (
    <div class="overflow-wrap">
      <Header />
      <Info
      skillSection={skills.map((el, index) =>{
        return (
        <CreateSkill 
          key={index}
          id={index}
          img={el.imgURL}
          title={el.title}
          content={el.content}
        />
        )
      })}
       />  
      <Footer />
    </div>
  )
}

export default App;
