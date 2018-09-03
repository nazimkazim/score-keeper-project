import React from 'react';
import { Players } from './../api/players';

export default class Player extends React.Component {
  update() {
    Players.update(this.props.player._id, { $inc: { score: 1 } });
  }
  render() {
    return (
      <div className="item" key={this.props.player._id}>
        <p>
          {this.props.player.name} has {this.props.player.score} score(s)
        </p>
        <button
          type="button"
          className="button button--round"
          onClick={() => {
            Players.update(this.props.player._id, { $inc: { score: 1 } });
          }}
        >
          +
        </button>
        <button
          type="button"
          className="button button--round"
          onClick={() => {
            Players.update(this.props.player._id, { $inc: { score: -1 } });
          }}
        >
          -
        </button>
        <button
          type="button"
          className="button button--round"
          onClick={() => {
            Players.remove(this.props.player._id);
          }}
        >
          x
        </button>
      </div>
    );
  }
}

Player.propTypes = {
  player: React.PropTypes.object.isRequired
};
