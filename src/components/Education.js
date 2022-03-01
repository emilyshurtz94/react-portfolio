import React from 'react'

export default function Education() {
  return (
    <div>
      <section className="p-3 mb-2 bg-info text-dark">
        <div className="container-fluid" id="education">

          <h1 style={{ "textDecoration": "underline;" }}>Education</h1>
          <ol>
            <li>UofA Coding Bootcamp</li>
            <li>EMS University</li>
            <li>Brigham Young University Idaho</li>
          </ol>

          <h3 style={{ "text-decoration": "underline;" }}> Certificates</h3>
          <h5>Completion of UofA Coding Bootcamp</h5>
          <h5>Emergency Medical Technician</h5>

        </div>
      </section>
    </div>
  )
}
