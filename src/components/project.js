import React from 'react'

export default function project() {
  return (
    <div>
      <section className="p-3 mb-2 bg-success text-white">
        <div className="container" id="projects">
          <h1 style={{ "textDecoration": 'underline; text-align-last: center' }}>Projects</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4 text-dark">
            <div className="col">
              <div className="card h-100">
                <img src="./images/Marvel-logo.png" className="card-img-top" alt="marvel"></img>
                <div className="card-body">
                  <h5 className="card-title">Marvel Comics</h5>
                  <p className="card-text">This website helps a user search for marvel comic books and where local comic book stores are.</p>
                </div>
                <div class="d-grid gap-2">
                <a href="https://emilyshurtz94.github.io/Group-Project-1/" className="btn btn-primary">Marvel Comic</a>
                <a href="https://github.com/emilyshurtz94/Group-Project-1" className="btn btn-primary">Marvel Comic Code</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="../images/Notetaker-logo.png" className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Note Taker</h5>
                  <p className="card-text">This application allows a user to write, save, and delete notes</p>
                </div>
                <div class="d-grid gap-2">
                <a href="https://note-taker-0123.herokuapp.com/" className="btn btn-primary">Start Note Taker</a>
                <a href="https://github.com/emilyshurtz94/note-taker-0123" className="btn btn-primary">Start Note Taker Code</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100" >
                <img src="./images/Password-logo.png" className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Password Generator</h5>
                  <p className="card-text">This site helps generate random passwords based on what a user inputs</p>
                </div>
                <div class="d-grid gap-2">
                  <a href="https://emilyshurtz94.github.io/homework-3/" className="btn btn-primary">Password Generator</a>
                  <a href="https://github.com/emilyshurtz94/homework-3" className="btn btn-primary">Password Generator Code</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="./images/swab-no-words.png" className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Swab Swap</h5>
                  <p className="card-text">This application helps users who need or want to give away at home covid tests.</p>
                </div>
                <div class="d-grid gap-2">
                <a href="https://swab-swap.herokuapp.com/" className="btn btn-primary">Swab Swap</a>
                <a href="https://github.com/emilyshurtz94/swab-swap" className="btn btn-primary">Swab Swap Code</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="./images/logo100.jpg" className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Tabula Rasa</h5>
                  <p className="card-text">This application helps users keep track of their mental and physical health.</p>
                </div>
                <div class="d-grid gap-2">
                <a href="https://tabula-rasa122.herokuapp.com/" className="btn btn-primary">Tabula Rasa</a>
                <a href="https://github.com/emilyshurtz94/tabula-rasa" className="btn btn-primary">Tabula Rasa Code</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="./images/Path Assessment.png" className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Path Assessment</h5>
                  <p className="card-text">This application assesses ENTRE students and figures out which area of business is best for them to pursue.</p>
                </div>
                <div class="d-grid gap-2">
                <a href="https://emilyshurtz94.github.io/Path-Assessment//" className="btn btn-primary">Path Assessment</a>
                <a href="https://github.com/emilyshurtz94/Path-Assessment" className="btn btn-primary">Path Assessment Code</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
