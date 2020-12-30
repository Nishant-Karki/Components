import React from "react";
import { Container, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

import "./card1.scss";

function Card1() {
  return (
    <div className="team-container">
      <div className="member-info-container">
        <div className="member-info">
          <Typography variant="h5">TITLE</Typography>
          <Typography>Sub-title</Typography>
          <Typography>Description</Typography>
          <ul className="social-media-team">
            <li>
              <Link to="/" className="icon">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link to="/" className="icon">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link to="/" className="icon">
                <AiFillTwitterCircle />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card1;
