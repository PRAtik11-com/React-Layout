import React from "react";
import "./home.css"
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <div className="container">
      <main className="main-content">
        <div className="content-area">
          <div className="left-section">
            <div className="banner">
              <img src="https://www.dotyeti.com/wp-content/uploads/2022/11/nutella.jpg" alt="Banner" className="banner-image" />
            </div>
          <div className="nav-button">
            <Navbar className="bg-body-tertiary justify-content-between">
                <Form inline>
                    <InputGroup>
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    </InputGroup>
                </Form>
                <Form inline>
                    <Row>
                    <Col xs="auto">
                        <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" variant="secondary" >Click</Button>
                    </Col>
                    </Row>
                </Form>
          </Navbar>
          </div>
          <div className="profile-card">
              <div className="profile-header">
                <div className="profile-image">
                  <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" alt="Profile Image" />
                </div>
                <div className="profile-info">
                  <h3>John Doe</h3>
                  <p>Software Engineer</p>
                </div>
              </div>
              <div className="profile-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ullamcorper, sapien ut commodo condimentum, tortor quam molestie magna,
                  ac dignissim nibh nulla non quam. Donec sit amet est at ipsum cursus
                  ultrices nec ac ante. Aenean sodales semper elit id pulvinar.
                </p>
                <div className="profile-footer">
                <Button variant="danger" style={{marginRight:"10px"}}>View Profile</Button>
                <Button variant="success">Edit</Button>
                </div>
              </div>
          </div>
          <div className="profile-card">
              <div className="profile-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ullamcorper, sapien ut commodo condimentum, tortor quam molestie magna,
                  ac dignissim nibh nulla non quam. Donec sit amet est at ipsum cursus
                  ultrices nec ac ante. Aenean sodales semper elit id pulvinar.
                </p>
                <div className="profile-footer">
                <Button variant="danger" style={{marginRight:"10px"}}>View Profile</Button>
                <Button variant="success">Edit</Button>
                </div>
              </div>
              <div className="profile-header">
                <div className="profile-image">
                  <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" alt="Profile Image" />
                </div>
                <div className="profile-info">
                  <h3>John Doe</h3>
                  <p>Software Engineer</p>
                </div>
              </div>
          </div>
          <div className="profile-card">
              <div className="profile-header">
                <div className="profile-image">
                  <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" alt="Profile Image" />
                </div>
                <div className="profile-info">
                  <h3>John Doe</h3>
                  <p>Software Engineer</p>
                </div>
              </div>
              <div className="profile-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ullamcorper, sapien ut commodo condimentum, tortor quam molestie magna,
                  ac dignissim nibh nulla non quam. Donec sit amet est at ipsum cursus
                  ultrices nec ac ante. Aenean sodales semper elit id pulvinar.
                </p>
                <div className="profile-footer">
                <Button variant="danger" style={{marginRight:"10px"}}>View Profile</Button>
                <Button variant="success">Edit</Button>
                </div>
              </div>
          </div>

           
          </div>
          <div className="right-section">
            <div className="search-bar">
            <Navbar className="bg-body-danger justify-content-between" >
            <Form inline >
                <Row>
                <Col xs="auto">
                    <Button type="submit">Click</Button>
                </Col>
                <Col xs="auto">
                    <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-1"  
                    />
                </Col>
                
                </Row>
            </Form>
            </Navbar>    
          
            </div>
            <div className="advertisement">
                <img 
                  src="https://i.pinimg.com/736x/d8/b1/05/d8b105fe7b3341aff349c9a115293bfe.jpg" 
                  alt="Advertisement" 
                  className="advertisement-image" 
                />
            </div>
            <div className="small-sections">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;