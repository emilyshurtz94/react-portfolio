import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


export default function Footer() {


  return (
    <div>
      <section className="p-3 mb-2 bg-dark text-white g-col-12">
        <div className="container ">
          <div className=" row">
            <div className="d-block col">
              <a href="mailto:emily.shurtz94@gmail.com"><FontAwesomeIcon className= 'fa-5x'icon={faEnvelope}></FontAwesomeIcon></a>
            </div>
            <div className="d-block col">
              <a href="https://github.com/emilyshurtz94"><FontAwesomeIcon className= 'fa-5x' icon={faGithub}></FontAwesomeIcon></a>
              </div>
              <div className="d-block col">
                <a href="https://www.linkedin.com/in/emily-shurtz-2a2766b1/"><FontAwesomeIcon className= 'fa-5x' icon={faLinkedin}></FontAwesomeIcon></a>
              </div>
            </div>
        </div>
      </section>
    </div >

  )
}