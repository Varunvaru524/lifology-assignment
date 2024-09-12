import UserInfoCard from 'app/components/UserInfoCard'
import { getUsers } from 'app/services/api'
import { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const UserListScreen = ({ navigation, routes }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers({ limit: 1, skip: 3 })
      .then((resolve) => {
        setUsers(resolve.data.users)
      })
      .catch((reject) => {
        console.log('Network error')
      })
  }, [])

  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item, index) => item}
        renderItem={({ item, index, separators }) => {
          return (
            <UserInfoCard
              name={item.firstName + ' ' + item.lastName}
              image={item.image}
              company={item.company.name}
              designetion={item.company.title}
            />
          )
        }}
      />
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