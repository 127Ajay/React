import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeclasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm m-1">increment</button>
        <ul>
          {this.state.tags.map(t => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeclasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
