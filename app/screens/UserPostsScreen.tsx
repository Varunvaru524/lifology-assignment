import { SafeAreaView, StyleSheet } from 'react-native'

const UserPostsScreen = ({ navigation, route }) => {
  console.log(route.params.userId)
  return (
    <SafeAreaView style={styles.container}>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  }
})


export default UserPostsScreen