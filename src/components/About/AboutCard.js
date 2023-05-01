import React from "react";
import Card from "react-bootstrap/Card";
import { ImStarFull } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <span className="purple">Courtney Gochenour </span>
            from <span className="purple"> Florida.</span>
            <br /> I am a full-stack web developer. While I have been a professional graphic designer for over seven years, my passion for web development has led me to the world of coding. With my enthusiasm for computers, I am excited to use my existing design skills to create innovative and dynamic web designs.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImStarFull /> Video Games
            </li>
            <li className="about-activity">
              <ImStarFull /> Watching Film
            </li>
            <li className="about-activity">
              <ImStarFull /> Cosplay
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I never dreamed about success. I worked for it."{" "}
          </p>
          <footer className="blockquote-footer">Esteé Lauder</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
