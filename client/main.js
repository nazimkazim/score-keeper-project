import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players } from './../imports/api/players';

const updateScore = (score, player) => {
  Players.update({ _id: player._id }, { $inc: { score: score } });
};

const renderPlayers = playersList => {
  return playersList.map(player => {
    return (
      <p key={player._id}>
        {player.name} has {player.score} point(s)
        <button
          type="button"
          onClick={e => {
            updateScore(1, player);
          }}
        >
          +1
        </button>
        <button
          type="button"
          onClick={e => {
            updateScore(-1, player);
          }}
        >
          -1
        </button>
        <button
          type="button"
          onClick={e => {
            Players.remove({
              _id: player._id
            });
          }}
        >
          x
        </button>
      </p>
    );
  });
};

const handleSubmit = e => {
  let playerName = e.target.playerName.value;
  e.preventDefault();

  if (playerName) {
    e.target.playerName.value = '';
    Players.insert({
      name: playerName,
      score: 0
    });
  }
};

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch();
    let title = 'Score keeper app';
    let name = 'Nazim';
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello {name}</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name" />
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
