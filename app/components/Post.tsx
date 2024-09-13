import { StyleSheet, Text, View } from "react-native"

const Post = ({ title, description, likes }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.description}>{likes} Likes</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 8,
    borderRadius: 16,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
    gap: 10
  },
  title: {
    fontFamily: 'inter',
    fontWeight: 'bold',
    fontSize: 20
  },
  description: {
    fontFamily: 'inter',
    fontWeight: '500',
    fontSize: 13,
  }
})

export default Post