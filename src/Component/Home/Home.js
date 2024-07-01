import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Home.css'
function Home() {
  return (
    <div>  
    <div class='slides' style={{paddingTop:'60px'}}>
    <Carousel>
      <Carousel.Item className='pic'>
        <img src='https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png' alt='' style={{width:'100%', height:'100vh'}} />
      </Carousel.Item>
      <Carousel.Item className='pic'>
        <img src='https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?cs=srgb&dl=pexels-negative-space-160107.jpg&fm=jpg' alt='' style={{width:'100%', height:'100vh'}} />
        
      </Carousel.Item>
      <Carousel.Item className='pic'>
        <img src='https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg' alt='' style={{width:'100%', height:'100vh'}} />
      </Carousel.Item>
    </Carousel>
    </div>

 <div class='info'>
    <Container>
      <Row class="img">
        <Col xs={6} md={4}>
          <Image src="https://www.unikainfocom.in/file/2019/03/Top-Website-Design-Tools-to-Enhance-Looks-2019.jpg" rounded  width={'90%'} height={'240px'}/>
          <p>Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.  According to a recent Stack Overflow survey of Developers, 48.2 percent consider themselves Full-Stack Developers.</p>
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://img.freepik.com/premium-photo/website-design-software-provide-modish-template-online-retail-business_31965-195967.jpg" roundedCircle width={'90%'} height={'240px'}/>
          <p>Web development is closely related to the job of designing the features and functionality of apps (web design). The term development is usually reserved for the actual construction of these things (that is to say, the programming of sites). Typically, Back-End Developers use server-side programming languages, including PHP, Ruby, and Python, as well as tools including MySQL, Oracle, and Git.</p>
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" thumbnail width={'90%'} height={'700px'}/>
          <p>The basic tools involved in web development are programming languages called HTML Hypertext Markup Language, CSS Cascading Style Sheets, and JavaScript. There are, however, a number of other programs used to “manage” or facilitate the construction of sites that would otherwise have to be done “from scratch” by writing code. A number of content management systems CMS fall into this category, including WordPress, Drupal, TYPO3, and Adobe Experience Manager, among others.</p>
        </Col>
      </Row>
    </Container>
 </div>

 <div class="btm-section">
 <Card style={{ width: '18rem' }}>   
      <Card.Body>
        <Card.Title>Web Design</Card.Title>
        <Card.Text>
        <ul>
         <li>Small Business Website</li>
         <li>Corporate Website</li>
         <li>eCommerce Website</li>
        </ul>  
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem'}}>   
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem'}}>   
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem'}}>   
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
 </div>
    </div>
  )
}
export default Home
