import React from 'react'
import { Container,Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center py-3">
              {/* স্বত্ব &copy;২০২৩-২০২৫ সেবা হোমিও হল কতৃক সর্বস্বত্ব সংরক্ষিত */}
              Copyright &copy; 2023-2024 Seba Shop developed by 
               <a href="https://mdfarhanshahriyar2023.netlify.app/" target='_blank'>Md.Farhan Shahriyar</a> 
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer
