import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0071ff',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

const { textStyle, buttonStyle } = styles;
export const Button = ({ onPress, children }) => (
  <TouchableOpacity onPress={onPress} style={buttonStyle}>
    <Text style={textStyle}>
      { children }
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};


export default Button;
