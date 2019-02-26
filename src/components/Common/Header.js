import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

const styles = {
  textStyle: {
    fontSize: 20,
  },
  viewStyle: {
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
};

export const Header = ({ title }) => (
// eslint-disable-next-line react/jsx-filename-extension
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{title}</Text>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};


export default Header;
