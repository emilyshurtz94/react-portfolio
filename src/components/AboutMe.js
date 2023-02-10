import React from 'react'

export default function AboutMe() {
  return (
    <div>
        <section className="p-5 bg-secondary text-white">
      <div className="container" id="aboutme">
        <div className="d-sm-flex align-items-center justify-content-between">
          <img className="img-fluid p-3 w-10px d-none d-sm-block" id="picture" src="../images/Emily Picture.jpeg" alt="emily-formal" />
          <div>
            <h1>Hello, I'm <span className="text-warning"> Emily Shurtz </span></h1>
            <p className="lead my-4">
              I'm a Junior Full Stack Web Developer with a background in Health Care. I'm detail-oriented, organized and meticulous employee. I work at a fast pace to meet harsh deadlines. I'm enthusiastic to learn more and grow as a Web Developer. 
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
