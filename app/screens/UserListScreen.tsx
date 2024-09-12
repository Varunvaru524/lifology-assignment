import AppLoading from 'app/components/AppLoading'
import UserInfoCard from 'app/components/UserInfoCard'
import { getUsers } from 'app/services/api'
import { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet } from 'react-native'

const UserListScreen = ({ navigation, routes }) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    getUsers()
      .then((resolve) => {
        setUsers(resolve.data.users)
        setLoading(false);
      })
      .catch((reject) => {
        console.log('Network error')
        setLoading(false);
      })
  }, [])

  useEffect(() => {
    if (page > 1) {
      setLoadingMore(true)
      getUsers(page)
        .then(resolve => {
          resolve.data?.users?.length > 0 && setUsers([...users, ...resolve.data.users])
          setLoadingMore(false)
        })
        .catch(reject => { console.log('Error while getting more users'); setLoadingMore(false); })
    }
  }, [page])

  // Function handers
  const handleRefresh = () => {
    setRefreshing(true)
    getUsers()
      .then(resolve => {
        setUsers(resolve.data.users)
        setPage(1)
        setRefreshing(false)
      })
      .catch(reject => {
        setPage(1)
        setRefreshing(false)
        console.log('Error while refreshing user list')
      })
  }

  const footerComponent = () => {
    return <ActivityIndicator size='large' animating={loadingMore} style={styles.footer} />
  }

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
        refreshing={refreshing}
        onRefresh={handleRefresh}
        ListFooterComponent={footerComponent}
        onEndReached={() => { (users.length !== 0) && setPage(page + 1); }}
        onEndReachedThreshold={0}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  footer: {
    marginVertical: 20
  }
})


export default UserListScreen