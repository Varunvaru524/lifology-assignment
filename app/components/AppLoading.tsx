import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

/**
 * A loading component for the app
 */
function AppLoading({ visible = false }) {
  return (
    <View style={styles.defaultContainer}>
      <ActivityIndicator animating={visible} size='large' />
    </View>
  )
}


const styles = StyleSheet.create({
  submitContainer: {
    backgroundColor: '#00000084',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  defaultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


export default AppLoading;