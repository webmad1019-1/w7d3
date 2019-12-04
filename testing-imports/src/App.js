import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      actors: [
        {
          id: 1,
          name: "Sean Conery"
        },
        {
          id: 2,
          name: "Bill Murray"
        },
        {
          id: 3,
          name: "Emilia Clarke"
        }
      ]
    };
  }

  deleteActor(id) {
    let actors = [...this.state.actors]
    let deletePosition;
    
    for (let i = 0; i < actors.length; i++) {
      if (actors[i].id === id) {
        deletePosition = i
      }
    }

    actors.splice(deletePosition, 1)

    this.setState({
      ...this.state,
      actors: actors
    })

  }

  render() {
    return (
      <section className="app">
        <ul>
          {this.state.actors.map(actor => (
            <li key={actor.id}>
              {actor.name} - id: {actor.id}{" "}
              <button onClick={() => this.deleteActor(actor.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
