import { View, Text, StyleSheet, Image } from "react-native"

const UserInfoCard = ({ image, name, designetion, company }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{name}</Text>
        <View>
          <Text style={styles.description}>{designetion}</Text>
          <Text style={styles.description}>{company}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 16,
    gap: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 }
  },
  image: {
    height: 96,
    width: 96,
    borderRadius: 96
  },
  infoContainer: {
    gap: 8,
    flexShrink: 1
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

export default UserInfoCard