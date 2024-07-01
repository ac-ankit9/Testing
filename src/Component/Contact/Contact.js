import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaYoutube } from "react-icons/fa";
import './Contact.css'
export default class Contact extends Component {
  render() {
    return (
      <div style={{backgroundImage:'url(Asset/Gallery/abc.jpg)', width:'100%',backgroundSize:'cover',minHeight:'100vh'}}>
      
      <Card className='card' style={{ width: '28rem', margin: '0 auto'}}>
      <img src='Asset/Gallery/ab.JPG' alt='' style={{ height: '400px' ,borderRadius:'100%'}}/>
      
      <Card.Body>
        <h2>Ankit Chaudhary</h2>
        <h4>Himachal Pradesh</h4>
        <h6>Age  27</h6>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <pre style={{fontSize:'18px'}}> Course:  Web. Development</pre>
        <pre style={{fontSize:'18px'}}> Email:  ac.ankit9@gmail.com</pre>
      </ListGroup>
      <h2 style={{ textAlign:'center'}}>Skills:</h2>
      <div className='bar1' style={{ margin:'5px auto', width:'100%', padding:'5px'}}>
      <h4>HTML</h4>
      <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style={{width: '85%', backgroundImage: 'linear-gradient(to right, rgb(184, 255, 103), #10e0eb) '}}>85%</div>
</div>
      </div>

      <div className='bar2' style={{ margin:'5px auto', width:'100%', padding:'5px'}}>
      <h4>CSS</h4>
      <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style={{width: '70%',   backgroundImage: 'linear-gradient(to right, rgb(184, 255, 103), #10e0eb)'}}>70%</div>
</div>
      </div>
     
      <div className='bar3' style={{ margin:'5px auto', width:'100%', padding:'5px'}}>
      <h4>Java Script</h4>
      <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style={{width: '60%',  backgroundImage: 'linear-gradient(to right, rgb(184, 255, 103), #10e0eb) '}}>60%</div>
</div>
      </div>

      <div className='bar4' style={{ margin:'5px auto', width:'100%' , padding:'5px'}}>
      <h4>PHP</h4>
      <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style={{width: '50%',  backgroundImage: 'linear-gradient(to right, rgb(184, 255, 103), #10e0eb)'}}>50%</div>
</div>
      </div>

      <div className='bar5' style={{ margin:'5px auto', width:'100%',  padding:'5px'}}>
      <h4>Python</h4>
      <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style={{width: '60%',  backgroundImage: 'linear-gradient(to right, rgb(184, 255, 103), #10e0eb)'}}>60%</div>
</div>
      </div>

      <div className='bar6' style={{ margin:'5px auto', width:'100%', padding:'5px'}}>
      <h4>React JS</h4>
      <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style={{width: '40%',  backgroundImage: 'linear-gradient(to right, rgb(184, 255, 103), #10e0eb)'}}>40%</div>
</div>
      </div>

      <div className='bar7' style={{ margin:'5px auto', width:'100%', padding:'5px'}}>
      <h4>My SQL</h4>
      <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style={{width: '50%',  backgroundImage: 'linear-gradient(to right, rgb(184, 255, 103), #10e0eb)'}}>50%</div>
</div>
      </div>
      
      <div className="card-body" style={{display:'flex', justifyContent:'space-around'}}>
      <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
    />
    
      <a href="https://www.instagram.com/pahari_pilot/"><i class="fab fa-instagram" style={{fontSize:'40px', color: 'rgb(231, 18, 142)'}}></i></a>
      <a href="https://www.youtube.com/@PahariPilot007" style={{ fontSize: '40px', color:'red',display:'flex'}}><FaYoutube></FaYoutube></a>
      <a href="https://www.facebook.com/yoyohoneysingh.71868964/" style={{ fontSize: '40px',display:'flex'}}><i class="fab fa-facebook-f"></i></a>
      </div> 
      </Card>
      </div>
  );
}

}

