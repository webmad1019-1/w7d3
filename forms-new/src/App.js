import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentActor: {
        name: "",
        age: 0
      },
      actors: []
    };
  }

  updateActor(e, key) {
    let actorUpdated = { ...this.state.currentActor };
    actorUpdated[key] = e.target.value;

    this.setState({
      ...this.state,
      currentActor: actorUpdated
    });
  }

  saveActor(e) {
    e.preventDefault();

    let actorsUpdated = [...this.state.actors];

    actorsUpdated.push({
      name: this.state.currentActor.name,
      age: this.state.currentActor.age
    });

    this.setState({
      ...this.state,
      currentActor: {
        name: "",
        age: 0
      },
      actors: actorsUpdated
    });
  }

  render() {
    return (
      <section className="App">
        <div>
          {this.state.currentActor.name.length > 0 && (
            <h1>The current actor name is {this.state.currentActor.name}</h1>
          )}

          <form>
            <input
              type="text"
              placeholder="actor name"
              onChange={e => this.updateActor(e, "name")}
              value={this.state.currentActor.name}
            />
            <input
              type="text"
              placeholder="actor age"
              onChange={e => this.updateActor(e, "age")}
              value={this.state.currentActor.age}
            />
            <button onClick={e => this.saveActor(e)}>OK</button>
          </form>
        </div>
        {this.state.actors.length > 0 && (
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Age</td>
              </tr>
            </thead>
            <tbody>
              {this.state.actors.map((actor, idx) => (
                <tr key={idx}>
                  <td>{actor.name}</td>
                  <td>{actor.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    );
  }
}
