import { Button, Image, StyleSheet, Text, View } from "react-native";
import { Video, ResizeMode } from "expo-av";

export function Home(){
  return (
    <View style={styles.container}>
      <Video
        source={require('assets/dribles.mp4')}
        shouldPlay
        isLooping
        style={styles.backgroundVideo}
        resizeMode={ResizeMode.COVER}
      />

    <View style={styles.overlay} />
      <Text style={styles.textStyle}> FUTTRAINING</Text>
      <View style={styles.button}><Image source={require('assets/google.png')} /><Text>Entrar com Google</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    width: '70%',
    marginTop: 40,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 20
  },
  textStyle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
  },
});