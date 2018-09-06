import React from 'react';
import Player from './Player';
import FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component {
  renderPlayer() {
    if (this.props.players.length === 0) {
      // return jsx
      return (
        <div className="item">
          <p className="item__message">Nazim pls add your first player</p>
        </div>
      );
    } else {
      return this.props.players.map(player => {
        return <Player key={player._id} player={player} />;
      });
    }
  }
  render() {
    return (
      <FlipMove
        easing="cubic-bezier(0, 0.7, 0.8, 0.1)"
        maintainContainerHeight={true}
      >
        {this.renderPlayer()}
      </FlipMove>
    );
  }
}

PlayerList.propTypes = {
  players: React.PropTypes.array.isRequired
};
