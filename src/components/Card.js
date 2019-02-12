import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  containerStyles: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    borderColor: '#ddd',
    borderRadius: 2,
    borderBottomWidth: 0,
    borderWidth: 1,
    elevation: 1,
    shadowOpacity: 0.1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

const Card = ({ children }) => (
  <View style={styles.containerStyles}>
    { children }
  </View>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
