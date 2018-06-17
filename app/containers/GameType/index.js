/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { getGameType } from './selectors';
import { updateGameType } from './actions';
import reducer from './reducer';
import './style.scss';

export class GameType extends React.Component { // eslint-disable-line react/prefer-stateless-function
  startGame(){
    event.preventDefault()
    this.props.history.push('/start')
  }

  render() {
    return (
      <div className="game-type-wrapper">
        <div className="label">Choose type of game</div>
        <div className="vs-computer game-type active">VS Computer</div>
        <div className="clearfix"></div>
        <div className="btn" onClick={e => this.startGame()}>Start Game</div>
      </div>
    );
  }
}

GameType.propTypes = {
  
};

const mapStateToProps = createStructuredSelector({
  gametype : getGameType()
});

const mapDispatchToProps = {
  updateGameType
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'gameInfo', reducer });

export default compose(
  withReducer,
  withConnect,
)(GameType);
