import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="g-4"> {/* Added Bootstrap row with gap */}
          {dataportfolio.map((data, i) => {
            return (
              <Col lg={4} md={6} sm={12} key={i}> {/* Added responsive columns */}
                <div className="po_item">
                  <img src={data.img} alt="" className="img-fluid" /> {/* Ensures responsive images */}
                  <div className="content mt-3">
                    <p>{data.description}</p>
                    <a href={data.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      View Project
                    </a>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </HelmetProvider>
  );
};
