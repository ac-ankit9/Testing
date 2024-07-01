import React, { Component } from 'react'
import './About.css'
export default class About extends Component {
  render() {
    return (     
  <section class="about-us" style={{padding: '100px 0', height:'100vh',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundImage:'url(https://img.freepik.com/premium-photo/business-meeting-blurred-room_41471-688.jpg?w=360)'}}>
    <div class="about">
    <div class="container" style={{width:'100%', display:'flex', justifyContent:'space-around'}}>
   
    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg" alt='' style={{borderRadius:'10px',width:'50%'}}></img>

      <div class="text" style={{width:'40%', backgroundColor:'lightblue', borderRadius:'10px',padding:'10px'}}>
        <h2>About Us</h2>
        <h5>Fullstack Developer & <span>Designer</span></h5>
        <p>Hi everyone my name is Ankit Chaudhary and i'm a Web Developer & Designer. I am working with frontend & backend Development. I have the necessary skill which a developer should have. if anyone want to Contact me please mail me. You can checkout my Email in contact section for contacting me.  I will be happy providing you my services. </p>
        <h2 style={{textAlign:'center'}}>Thank You!</h2>
    </div>
    </div>
    </div>
  </section>  
    )
  }
}
