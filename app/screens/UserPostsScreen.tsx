import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import { useEffect, useState } from 'react'
import constants from 'expo-constants'
import Post from 'app/components/Post'
import AppLoading from 'app/components/AppLoading'
import EmptyStateComponent from 'app/components/EmptyStateComponent'
import { getPosts } from 'app/services/api'

const UserPostsScreen = ({ navigation, route }) => {

  const { userId } = route.params
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [page, setPage] = useState(1)
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

  useEffect(() => {
    if (page > 1) {
      setLoadingMore(true)
      getPosts(userId, page)
        .then(resolve => {
          resolve.data?.posts?.length > 0 && setPosts([...posts, ...resolve.data.posts])
          setLoadingMore(false)
        })
        .catch(reject => { console.log('Error while getting more posts'); setLoadingMore(false); })
    }
  }, [page])

  // Function handers
  const handleRefresh = () => {
    setRefreshing(true)
    getPosts(userId)
      .then(resolve => {
        setPosts(resolve.data.posts)
        setPage(1)
        setRefreshing(false)
      })
      .catch(reject => {
        setPage(1)
        setRefreshing(false)
        console.log('Error while refreshing posts list')
      })
  }

  const footerComponent = () => {
    return <ActivityIndicator size='large' animating={loadingMore} style={styles.footer} />
  }

  //Screen
  if (loading) return <AppLoading visible={loading} />
  if (posts.length === 0) return <EmptyStateComponent title='No postes are posted by this user' />
  return (
    <View style={styles.container}>
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
        ListFooterComponent={footerComponent}
        onEndReached={() => { (posts.length !== 0) && setPage(page + 1); }}
        onEndReachedThreshold={0}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: constants.statusBarHeight
  },
  footer: {
    marginVertical: 20
  }
})


export default UserPostsScreen