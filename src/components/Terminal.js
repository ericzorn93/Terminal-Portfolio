import React, { Component } from 'react';
import '../assets/css/terminal.css';

class Terminal extends Component {

    state = {
        termCommands: ['clear', 'help', 'name', 'origin', 'degree', 'resume', 'current role'],
        name: "Eric Zorn",
        origin: "River Vale, NJ",
        degree: {
            undergraduate: "B.A. Interactive Digital Design, Quinnipiac University, 2017",
            graduate: "M.S. Information and Communications Technology: Conentration in Web Design & Development, University of Denver, 2018",
        },
        resume: "http://ericzorndesigns.com/pdf/EricZornFinal.pdf",
        currentRole: "Actively Pursuing Web Development Opportunities"
    };


    // Handler Methods
    handleSubmit = e => {
      e.preventDefault();
    };

    handleChange = e => {
      e.preventDefault();
      let value = e.target.value;

      this.state.termCommands.forEach(command => {
          switch (command) {
              case value:
                  if (value === "clear") {
                      this.output.innerHTML = "";
                  } else if (value === "help")  {
                      this.output.innerHTML = `
                       List of Recognized Commands:
                       <br>
                       > ${this.state.termCommands[0]}
                       <br>
                       > ${this.state.termCommands[1]}
                       <br>
                       > ${this.state.termCommands[2]}
                       <br>
                       > ${this.state.termCommands[3]}
                       <br>
                       > ${this.state.termCommands[4]}
                       <br>
                       > ${this.state.termCommands[5]}
                       <br>
                       > ${this.state.termCommands[6]}
                       <br>
                      `;
                  } else if (value === "name") {
                      this.output.innerHTML = `> Name: ${this.state.name}`;
                  } else if (value === "origin") {
                      this.output.innerHTML = `> Origin: ${this.state.origin}`;
                  } else if (value === "degree") {
                      this.output.innerHTML = `> ${this.state.degree.undergraduate} <br> <br> > ${this.state.degree.graduate}`;
                  }
                  else if (value === "resume") {
                      this.output.innerHTML = `<a class="link" href=${this.state.resume} target="_blank">> Resume: <em>External Link</em></a>`;
                  } else if (value === "current role") {
                      this.output.innerHTML = `> ${this.state.currentRole}`;
                  } else {
                      console.warn("Enter a proper value");
                  }
                  break;

              default:
                  return false
          }
      })
    };


    render() {
        return (
            <div className="terminal-container">
                <div className="terminal-head">
                    <div id="button1"></div>
                    <div id="button2"></div>
                    <div id="button3"></div>
                    <p id="name">Eric Zorn's Terminal Portfolio</p>
                </div>

                <p id="instruction">> Type "Help" for a list of recognized commands</p>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="command-input" id="command-label">EZ-Terminal$</label>
                    <input type="text" className="command-input" id='command-input' autoFocus={true} onChange={this.handleChange}/>
                </form>

                <div className="output-container">
                    <p className="output" ref={output => this.output = output}></p>
                </div>
            </div>
        )
    }
}

export default Terminal;