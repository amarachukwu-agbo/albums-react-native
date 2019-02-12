import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    borderBottomWidth: 0,
    backgroundColor: '#fff',
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};
const CardSection = ({ children }) => (
  <View style={styles.containerStyle}>
    { children }
  </View>
);

CardSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardSection;
