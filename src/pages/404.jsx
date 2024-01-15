

import React from 'react'
import "../scss/404.scss"
import { Breadcrumb } from 'antd'
import HelmetComponent from "../components/helmet";
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
   <>
      <HelmetComponent title="404 page"></HelmetComponent>
      <Breadcrumb title="404 page"></Breadcrumb>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>Oops! Nothing was found</h2>
          <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable. <Link to="/">Home Page</Link></p>
          <div className="notfound-social">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaPinterest /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>
   </>
  )
}
