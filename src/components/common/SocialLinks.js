import React from "react";

import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

import { Link } from "react-router-dom";
export default function SocialLinks() {
  return (
    <ul>
      <li>
        <Link to="/" className="icon">
          <FaFacebook />
        </Link>
      </li>
      <li>
        <Link to="/" className="icon">
          <FaInstagram />
        </Link>
      </li>

      <li>
        <Link to="/" className="icon">
          <FaGoogle />
        </Link>
      </li>
      <li>
        <Link to="/" className="icon">
          <FiTwitter />
        </Link>
      </li>
    </ul>
  );
}
