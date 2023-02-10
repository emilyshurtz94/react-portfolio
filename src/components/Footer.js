import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {


  return (
      <section className="bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-3 py-3 px-md-5">
              <a href="https://github.com/emilyshurtz94"><FontAwesomeIcon className='fa-3x'icon={faGithub}></FontAwesomeIcon></a>
            </div>
            <div className="col-3 py-3 px-md-5">
              <a href="https://www.linkedin.com/in/emily-shurtz-2a2766b1/"><FontAwesomeIcon className='fa-3x'icon={faLinkedin}></FontAwesomeIcon></a>
            </div>
            <div className="col-3 py-3 px-md-5">
              <a href="https://www.upwork.com/freelancers/~0138b7adf5c0b444bf"><FontAwesomeIcon className='fa-3x'icon={faCircleArrowUp} /></a>
            </div>
            <div className="col-3 py-3 px-md-5">
              <a href="https://stackoverflow.com/users/17388824/emily-shurtz?tab=profile"><FontAwesomeIcon className='fa-3x'icon={faStackOverflow} /></a>
            </div>
          </div>
        </div>
      </section>

  )
}