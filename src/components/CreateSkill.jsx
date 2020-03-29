import React from "react";

function CreateSkill(props){
    return(
       
        <div class="p-2 justify-content-center animated fadeInLeftBig delay-2s skill-row">
          <img class="soft-skill-img img-responsive" src={props.img} alt="Soft-skill Picture"/>
          <h3 class="text-left font-weight-bold">{props.title}</h3>
          <p class="text-left"><strong>{props.content}</strong></p>
        </div>
      
    )
}
/*
function CreateSkillTech(props){
  return(
     
      <div class="p-2 justify-content-center animated fadeInRightBig delay-2s skill-row">
      <h3 class="text-left font-weight-bold">{props.title}</h3>
        <img class="soft-skill-img" src={props.img} alt="Skill Picture"/>
        <img class="soft-skill-img" src={props.img} alt="Skill Picture"/>
        <img class="soft-skill-img" src={props.img} alt="Skill Picture"/>
      </div>
    
  )
}
*/
export default CreateSkill;