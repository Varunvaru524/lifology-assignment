import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'


function EmptyStateComponent({ image, title, description, buttonText, onButtonPress }) {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
}

EmptyStateComponent.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  onButtonPress: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontFamily: 'inter',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  }
})


export default EmptyStateComponent;