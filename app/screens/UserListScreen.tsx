import UserInfoCard from 'app/components/UserInfoCard'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const UserListScreen = ({ navigation, routes }) => {
  return (
    <SafeAreaView style={styles.container}>
      <UserInfoCard/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  }
})


export default UserListScreen