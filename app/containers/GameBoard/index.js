/**
 *
 * GameBoard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectGameBoard from './selectors';
import reducer from './reducer';
import saga from './saga';

import './style.scss';

export class GameBoard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
      return (
        <div id="ludo-board-wrapper">
          <div id="main">
            <div id="nw">
              <div className="panelStyle">
                <div id="gre-4" ><div>4</div></div>
                <div id="gre-3" ><div>3</div></div>
                <div id="gre-2" ><div>2</div></div>
                <div id="gre-1" ><div>1</div></div>
              </div>
            </div>

            <div id="top">
              <div className="a" id="52"></div>
              <div className="a" id="51"></div>
              <div className="a" id="50"></div>
              <div className="a" id="1"></div>
              <div className="a" id="101"></div>
              <div className="a" id="49"></div>
              <div className="a" id="2"></div>
              <div className="a" id="102"></div>
              <div className="a" id="48"></div>
              <div className="a" id="3"></div>
              <div className="a" id="103"></div>
              <div className="a" id="47"></div>
              <div className="a" id="4"></div>
              <div className="a" id="104"></div>
              <div className="a" id="46"></div>
              <div className="a" id="5"></div>
              <div className="a" id="105"></div>
              <div className="a" id="45"></div>
            </div>

            <div id="ne">
              <div className="panelStyle">
                <div id="yel-4" ><div>4</div></div>
                <div id="yel-3" ><div>3</div></div>
                <div id="yel-2" ><div>2</div></div>
                <div id="yel-1" ><div>1</div></div>
              </div>
            </div>

            <div id="left">
              <div className="diff">
                <div className="a" id="11"></div>
                <div className="a" id="10"></div>
                <div className="a" id="9"></div>
                <div className="a" id="8"></div>
                <div className="a" id="7"></div>
                <div className="a" id="6"></div>
              </div>
              <div>
                <div className="a" id="12"></div>
                <div className="a"  id="201"></div>
                <div className="a"  id="202"></div>
                <div className="a" id="203"></div>
                <div className="a" id="204"></div>
                <div className="a" id="205"></div>
              </div>
              <div className="diff">
                <div className="a" id="13"></div>
                <div className="a" id="14"></div>
                <div className="a" id="15"></div>
                <div className="a" id="16"></div>
                <div className="a" id="17"></div>
                <div className="a" id="18"></div>
              </div>
            </div>

            <div id="cen">
              <div className="left"></div>
              <div className="right"></div>
              <div className="top"></div>
              <div className="bottom"></div>
            </div>
             
            <div id="right">
              <div className="diff">
                <div className="a" id="44"></div>
                <div className="a" id="43"></div>
                <div className="a" id="42"></div>
                <div className="a" id="41"></div>
                <div className="a" id="40"></div>
                <div className="a" id="39"></div>
              </div>
              <div>
                <div className="a" id="305"></div>
                <div className="a" id="304"></div>
                <div className="a" id="303"></div>
                <div className="a" id="302"></div>
                <div className="a" id="301"></div>
                <div className="a" id="38"></div>
              </div>
              <div className="diff">
                <div className="a" id="32"></div>
                <div className="a" id="33"></div>
                <div className="a" id="34"></div>
                <div className="a" id="35"></div>
                <div className="a" id="36"></div>
                <div className="a" id="37"></div>
              </div>
            </div>

            <div id="sw">   
              <div className="panelStyle">
                <div id="red-4" ><div>4</div></div>
                <div id="red-3" ><div>3</div></div>
                <div id="red-2"  ><div>2</div></div>
                <div id="red-1" ><div>1</div></div>
              </div>
            </div>

            <div id="bottom">
              <div className="a" id="19"></div>
              <div className="a" id="405"></div>
              <div className="a" id="31"></div>
              <div className="a" id="20"></div>
              <div className="a" id="404"></div>
              <div className="a" id="30"></div>
              <div className="a" id="21"></div>
              <div className="a" id="403"></div>
              <div className="a" id="29"></div>
              <div className="a" id="22"></div>
              <div className="a" id="402"></div>
              <div className="a" id="28"></div>
              <div className="a" id="23"></div>
              <div className="a" id="401"></div>
              <div className="a" id="27"></div>
              <div className="a" id="24"></div>
              <div className="a" id="25"></div>
              <div className="a" id="26"></div>
            </div> 

            <div id="se">
              <div className="panelStyle">
                <div id="blu-4" ><div>4</div></div>
                <div id="blu-3" ><div>3</div></div>
                <div id="blu-2" ><div>2</div></div>
                <div id="blu-1" ><div>1</div></div>
              </div>
            </div>
          </div>
        </div>        
      );
  }
}

GameBoard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  gameboard: makeSelectGameBoard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'gameBoard', reducer });
const withSaga = injectSaga({ key: 'gameBoard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(GameBoard);
