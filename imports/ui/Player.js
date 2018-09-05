import React from 'react';
import { Players } from './../api/players';

export default class Player extends React.Component {
  update() {
    Players.update(this.props.player._id, { $inc: { score: 1 } });
  }
  render() {
    return (
      <div className="item" key={this.props.player._id}>
        <div className="player">
          <div>
            <h3 className="player__name">{this.props.player.name}</h3>
            <p className="player__stats">{this.props.player.score} point(s)</p>
          </div>
          <div className="player__actions">
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
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  player: React.PropTypes.object.isRequired
};
