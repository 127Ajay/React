import React, { Component } from "react";

class Counter extends Component {
  state = {
    //tags: ["tag1", "tag2", "tag3"]
    tags: []
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>THere are no element</p>;

    return (
      <ul>
        {this.state.tags.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Create a new Element"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
