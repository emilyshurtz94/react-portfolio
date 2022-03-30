import React from 'react'

export default function AboutMe() {
  return (
    <div>
        <section className="p-3 mb-2 bg-secondary text-white">
      <div className="container" id="aboutme">
        <div className="d-sm-flex align-items-center justify-content-between">
          <img className="img-fluid p-3 w-10px d-none d-sm-block" id="picture" src="../images/Emily Picture.jpeg" alt="emily-formal" />
          <div>
            <h1>Hello, I'm <span className="text-warning"> Emily Shurtz </span></h1>
            <p className="lead my-4">
              I currently live in Arizona, but am willing to relocate or work from home. I'm a new web developer.I just finished UofA full-stack bootcamp. I'm excited to put my new skills to work. I love to constantly learn new things and grow to become the best web developer I can be.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
