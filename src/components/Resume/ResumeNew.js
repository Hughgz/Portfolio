import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf1 from "../../Assets/Resume.pdf"; // First PDF file
import pdf2 from "../../Assets/CoverLetter.pdf"; // Second PDF file
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // Adjust scale based on screen width for better responsiveness
  const getScale = () => {
    if (width > 1200) return 1.0; // Larger screens
    if (width > 786) return 0.7;  // Medium screens
    return 0.5;                  // Small screens
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row className="resume">
          <Col xs={12} md={6} className="d-flex justify-content-center mb-4 mb-md-0">
            <Document file={pdf1}>
              <Page pageNumber={1} scale={getScale()} />
            </Document>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <Document file={pdf2}>
              <Page pageNumber={1} scale={getScale()} />
            </Document>
          </Col>
        </Row>

        <Row className="justify-content-center py-4">
          <Button
            variant="primary"
            href={pdf1}
            target="_blank"
            className="mx-2 my-2"
          >
            <AiOutlineDownload /> Download Resume
          </Button>
          <Button
            variant="primary"
            href={pdf2}
            target="_blank"
            className="mx-2 my-2"
          >
            <AiOutlineDownload /> Download Cover Letter
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
