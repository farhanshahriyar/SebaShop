import React from 'react'
import { Container,Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">
              Copyright &copy; 2023-2024 MovieNetwork developed by 
               <a href="#" target='_blank'>Two Ventures</a> 
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer
