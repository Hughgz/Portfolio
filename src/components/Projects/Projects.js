import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              isBlog={false}
              title="MH Cinema (Movie Ticket Booking Platform)"
              description={
                <>
                  <strong>Owner</strong> - Mar 2024 - Aug 2024<br />
                  Developed and maintained the MH Cinema website, an online movie ticket booking platform using React and Java Spring Boot. Designed and implemented RESTful APIs, integrated VNPay for secure online payments, and automated ticket information emails to users. Ensured robust user authentication with Spring Security and managed data efficiently using Hibernate and MySQL. Enhanced the user interface with Chakra UI and managed state with Redux.<br /><br />
                  <strong>Technologies Used:</strong><br />
                  - <strong>Backend:</strong> Spring Boot, Spring Security, Hibernate, Spring Data JPA, RESTful Services<br />
                  - <strong>Frontend:</strong> React, Redux, Chakra UI, Material-UI, Tailwind<br />
                  - <strong>Payment Gateways:</strong> VNPAY<br />
                  - <strong>Database:</strong> MySQL<br />
                  - <strong>Media Storage:</strong> Cloudinary
                </>
              }
              ghLink="https://github.com/yourusername/MH-Cinema-Frontend" // Replace with actual GitHub link
              ghLinkBackend="https://github.com/yourusername/MH-Cinema-Backend" // Replace with actual GitHub link
              demoLink="https://lthshop-frontend.vercel.app/" // Replace with actual demo link if available
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              isBlog={false}
              title="LTH Store (E-commerce Website for Selling Shoes)"
              description={
                <>
                  <strong>Team Size: 3</strong> - Oct 2024 – Jan 2025<br />
                  LTH Store is an advanced e-commerce website designed to provide an intuitive shopping experience for customers buying footwear. The platform is equipped with a wide range of features that streamline the shopping journey, from browsing and cart management to order tracking and customer support.<br /><br />
                  <strong>My Responsibilities in the Project:</strong><br />
                  - <strong>Frontend:</strong> Developed the UI using Next.js, Redux, Tailwind CSS, and Material-UI for a seamless shopping experience.<br />
                  - <strong>Backend:</strong> SEO, Email & Live Chat, OTP verification, Order Tracking, Admin Site.<br />
                  - <strong>Deployments:</strong> Backend on Azure App Service | Frontend on Vercel | Database on Azure SQL Database.<br /><br />
                  <strong>Technologies Used:</strong><br />
                  - <strong>Frontend:</strong> Next.js, Redux, Material-UI, Tailwind CSS<br />
                  - <strong>Backend:</strong> C#, .NET Framework, RESTful API<br />
                  - <strong>Database:</strong> Azure<br />
                  - <strong>Media Storage:</strong> Cloudinary<br />
                  - <strong>Authentication:</strong> JWT<br />
                  - <strong>Payment Gateways:</strong> PayPal, VNPAY<br />
                  - <strong>Recommender Systems:</strong> Machine Learning algorithms for product suggestions<br />
                  - <strong>Live Chat:</strong> Livechat, Zalo Chat<br />
                  - <strong>Analytics and SEO:</strong> Google Analytics, SEO Quark, robots.txt, sitemap.xml, Facebook Sharing
                </>
              }
              ghLink="https://github.com/yourusername/LTH-Store-Frontend" // Replace with actual GitHub link
              ghLinkBackend="https://github.com/yourusername/LTH-Store-Backend" // Replace with actual GitHub link
              demoLink="https://lthshop-frontend.vercel.app/"
              demoLinkAdmin="https://lthshop-admin.vercel.app/" // Replace with actual admin demo link if available
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;