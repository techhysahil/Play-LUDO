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
import { getUserName } from './selectors';
import { updateUserName } from './actions';
import reducer from './reducer';
import './style.scss';
import defaultUserImage from '../../images/default-user.png';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  goToChooseGameType(){
    event.preventDefault()
    this.props.history.push('/gametype')
  }

  render() {
    const { updateUserName, userName } = this.props;
    console.log(userName);
    return (
      <div>
        <img className="user-image" src={defaultUserImage} alt="User image" />
        <input type="text" placeholder="Enter User Name" value={userName} onChange={e => updateUserName(e.target.value)} />
        <div className="btn" onClick={this.goToChooseGameType.bind(this)}>Next</div>
      </div>
    );
  }
}

HomePage.propTypes = {
  
};

const mapStateToProps = createStructuredSelector({
  userName: getUserName(),
});

const mapDispatchToProps = {
  updateUserName
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'userInfo', reducer });

export default compose(
  withReducer,
  withConnect,
)(HomePage);
