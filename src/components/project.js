import React from 'react'

export default function project() {
  return (
    <div>
        <section className="p-3 mb-2 bg-success text-white">
      <div className="container" id="projects">
        <h1 style={{"textDecoration": 'underline; text-align-last: center'}}>Projects</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 text-dark">
        <div className="col">
          <div className="card h-100"style={{"width": "18rem"}}>
            <img src="./images/Marvel-logo.png" className="card-img-top" alt="marvel"></img>
            <div className="card-body">
              <h5 className="card-title">Marvel Comics</h5>
              <p className="card-text">This website helps a user search for marvel comic books and where local comic book stores are.</p>
            </div>
            <a href="https://emilyshurtz94.github.io/Group-Project-1/" className="btn btn-primary">Marvel Comic</a>
          </div>
        </div>
        <div className="col">
          <div className="card h-100" style={{"width": "18rem;"}}>
            <img src="../images/Notetaker-logo.png" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Note Taker</h5>
              <p className="card-text">This application allows a user to write, save, and delete notes</p>
            </div>
            <a href="https://note-taker-0123.herokuapp.com/" className="btn btn-primary">Start Note Taker</a>
          </div>
        </div>
        <div className="col">
          <div className="card h-100" style={{"width": "18rem;"}}>
            <img src="./images/Password-logo.png" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Password Generator</h5>
              <p className="card-text">This site helps generate random passwords based on what a user inputs</p>
            </div>
            <a href="https://emilyshurtz94.github.io/homework-3/" className="btn btn-primary">Password Generator</a>
          </div>
        </div>
        <div className="col">
          <div className="card h-100" style={{"width": "18rem;"}}>
            <img src="./images/swab-no-words.png" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Swab Swap</h5>
              <p className="card-text">This application helps users who need or want to give away at home covid tests.</p>
            </div>
            <a href="https://swab-swap.herokuapp.com/" className="btn btn-primary">Swab Swap</a>
          </div>
        </div>
      
      </div>
    </div>
    </section>
    </div>
  )
}
