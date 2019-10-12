import React from "react";
import PropTypes from "prop-types";
//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ErrorActions } from "../../store/ducks/error.ducks";

import { Container } from "./error-box.style";

const ErrorBox = ({ error: { visible, message }, hideError }) =>
  visible && (
    <Container>
      <p>{message}</p>
      <button onClick={hideError}>X</button>
    </Container>
  );

ErrorBox.propTypes = {
  hideError: PropTypes.func.isRequired,
  error: PropTypes.shape({
    visible: PropTypes.bool,
    message: PropTypes.string
  }).isRequired
};

const mapStateToProps = state => ({
  error: state.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ErrorActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorBox);
