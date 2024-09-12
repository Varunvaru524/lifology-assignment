import AppLoading from 'app/components/AppLoading'
import UserInfoCard from 'app/components/UserInfoCard'
import { getUsers } from 'app/services/api'
import { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const UserListScreen = ({ navigation, routes }) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    getUsers({ limit: 10, skip: 0 })
      .then((resolve) => {
        setUsers(resolve.data.users)
        setLoading(false);
      })
      .catch((reject) => {
        console.log('Network error')
        setLoading(false);
      })
  }, [])

  //Screen
  if (loading) return <AppLoading visible={loading} />
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item, index) => item.id}
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