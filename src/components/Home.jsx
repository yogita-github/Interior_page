import React from 'react';
import Navbar from "./Navbar";
import "./Home.css";
import Footer from "./Footer";
import Img1 from "./img1.png";
import Img02 from "./img02.png";
import {Link} from 'react-router-dom';
import Img3 from "./img3.png";
import Img4 from "./img4.png";



function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="left-div">
          <h1>Interior Design</h1>
          <p>
            Step into a world where the art of interior Design is meticulously
            <br /> crafted to bring together timeless elegance and cutting-edge{" "}
            <br />
            modern Innovation,Allowing you to transform your living spaces
            <br /> into the epitome of luxury and sophistication
          </p>
        </div>

        <div className="right-div">
          <img src={Img1} alt="Interior Design Image" />
        </div>
      </div>
      <div className="container1">
        <div className="left-div1">
          <Link to="/start_project" className="start_project">
            Start Project
          </Link>
          <div className="project-stats-container">
            <div className="project-stats">
              <h2 className="big-font gray-color">400+</h2>
              <p className="small-font light-gray-color">Project_Complete</p>
            </div>

            <div className="project-stats">
              <h2 className="big-font gray-color">600+</h2>
              <p className="small-font light-gray-color">Satisfied_Clients</p>
            </div>

            <div className="project-stats">
              <h2 className="big-font gray-color">100+</h2>
              <p className="small-font light-gray-color">Unique_Styles</p>
            </div>
          </div>
        </div>

        <div className="right-div1">
          <img src={Img02} alt="Interior Design Image" />
        </div>
      </div>
      <div className="services-section">
        <h2 style={{ fontWeight: "200px" }}>Our Services</h2>
        <div className="service">
          <img
            src="https://img.freepik.com/free-vector/pendant-lamp-gray_53876-85016.jpg?size=626&ext=jpg&ga=GA1.1.1315413171.1679411364&semt=ais"
            alt="Lighting Design"
            style={{ height: "40px", width: "40px" }}
          />
          <div className="service-content">
            <h3 style={{ fontWeight: "600", paddingBottom: "10px" }}>
              Lighting Design
            </h3>
          </div>
          <p style={{ color: "rgb(130, 130, 141)", fontSize: "14px" }}>
            Achieve the perfect balance <br />
            of ambient,task,and accent lighting
            <br /> for a functional atmosphere
          </p>
        </div>
        <div className="service">
          <img
            src="https://img.freepik.com/free-vector/vector-house-interior-with-white-armchair-black-floor-lamp-red-book-violet-wall-front-view_1284-48469.jpg?size=626&ext=jpg&ga=GA1.1.1315413171.1679411364&semt=ais"
            alt="Service 2"
            style={{ height: "40px", width: "40px" }}
          />
          <div className="service-content">
            <h3 style={{ fontWeight: "600", paddingBottom: "10px" }}>
              Interior Design
            </h3>
            <p>
              From concept to completion, we <br />
              oversee every detail to bring your <br />
              vision to life efficiently
            </p>
          </div>
        </div>
        <div className="service">
          <img
            src="https://img.freepik.com/free-vector/isolated-tree-white_1308-50012.jpg?size=626&ext=jpg&ga=GA1.1.1315413171.1679411364&semt=sph"
            alt="Service 3"
            style={{ height: "40px", width: "40px" }}
          />
          <div className="service-content">
            <h3 style={{ fontWeight: "600", paddingBottom: "10px" }}>
              Outdoor Design
            </h3>
            <p>
              Celebrate the changing seasons <br />
              with our seasonal outdoor decor
              <br /> services
            </p>
          </div>
        </div>
      </div>
      <div className="Designing_para">
        <div className="container4">
          <div className="left-div4">
            <img src={Img3} alt="Your Image" style={{ height: "80%" }} />
          </div>
          <div className="right-div4">
            <h2 style={{ fontSize: "40px" }}>
              Designing Your Dream <br />
              With Brilliance
            </h2>
            <p>
              Elevated your spaces with bespoke interior designs that reflect
              <br />
              your unique style and aspirations,crafted with precision and{" "}
              <br />
              brilliance for an unforgettable living experience
            </p>
            <p>
              Living Room Interior Design
              <span style={{ marginLeft: "355px" }}>
                <b>+</b>
              </span>
            </p>
            <hr />
            <p>
              Commercial Office Room Interior Design
              <span style={{ marginLeft: "250px" }}>
                <b>+</b>
              </span>
            </p>
            <hr />
            <br />
            <Link to="/learn_more" className="learn_more">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="Designing_para3">
        <div className="container5">
          <div className="left-div5" style={{marginLeft:"150px"}} >
            <h2>
              Designing Your Dream in
              Three Simple Steps
            </h2>

            <h3 style={{paddingTop:"50px"}}>Start Project</h3>
            <p style={{color:""}}>Embark on your design adventure by initiating <br/>your project.Share your vision and set teh stage <br/>for a bespoke design experience</p>
            <h3>Craft</h3>
            <p>Collaborate closely to achieve design excellence<br/> refining your vision and crafting brilliance into<br/>every aspect of your space </p>
            <h3>Execute</h3>
            <p>Witness your vision becoming a reality as we <br/>execute the design plan with precision.Celebrate <br/>teh joy of your newly transformed space</p>
          </div>
          <div className="right-div5">
            <img src={Img4} alt="Your Image" style={{ height: "100%",marginLeft:"50px" }} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home
