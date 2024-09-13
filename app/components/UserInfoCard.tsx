import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from "react-native"
import { useNavigation } from "@react-navigation/native"

const UserInfoCard = ({ userId, image, name, designetion, company }) => {
  const navigation = useNavigation()
  const onPress = () => {
    navigation.navigate('UserPostsScreen', { userId })
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexGrow: 1 }}>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{name}</Text>
            <View>
              <Text style={styles.description}>{designetion}</Text>
              <Text style={styles.description}>{company}</Text>
            </View>
          </View>
          <Image
            source={require('../../assets/icons/caretRight.png')}
            style={styles.caretRigth}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 8,
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
    borderRadius: 96,
  },
  caretRigth: {
    height: 30,
    width: 30,
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