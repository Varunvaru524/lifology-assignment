import AppLoading from 'app/components/AppLoading'
import Post from 'app/components/Post'
import { getPosts } from 'app/services/api'
import { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'

const UserPostsScreen = ({ navigation, route }) => {
  const { userId } = route.params
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts(userId)
      .then(resolve => {
        setPosts(resolve.data.posts)
        setLoading(false);
      })
      .catch(reject => {
        console.log('Network Error')
        setLoading(false);
      })
  }, [])

    // Function handers
    const handleRefresh = () => {
      setRefreshing(true)
      getPosts(userId)
        .then(resolve => {
          setPosts(resolve.data.posts)
          setRefreshing(false)
        })
        .catch(reject => {
          setRefreshing(false)
          console.log('Error while refreshing posts list')
        })
    }

  //Screen
  if (loading) return <AppLoading visible={loading} />
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => {
          return (
            <Post
              title={item.title}
              description={item.body}
              likes={item.reactions.likes}
            />
          )
        }}
        refreshing={refreshing}
        onRefresh={handleRefresh}
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


export default UserPostsScreen