import React from 'react';
import Player from './Player';

export default class PlayerList extends React.Component {
  renderPlayer() {
    if (this.props.players.length === 0) {
      // return jsx
      return <p>Nazim pls add your first player</p>;
    } else {
      return this.props.players.map(player => {
        return <Player key={player._id} player={player} />;
      });
    }
  }
  render() {
    return <div>{this.renderPlayer()}</div>;
  }
}

PlayerList.propTypes = {
  players: React.PropTypes.array.isRequired
};
