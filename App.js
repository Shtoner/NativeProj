import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight, Button, StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableHighlight underlayColor='red' onPress={() => Alert.alert('you mighta thought')}>
          <Text style={styles.touch}>This is a button</Text>
      </TouchableHighlight>
      <Button title='this too'onPress={()=> Alert.alert('sike 730 sharp boi')}></Button>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touch: {
    color:'orange',
  },
});
