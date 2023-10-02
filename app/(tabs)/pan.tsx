import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pan from '@/components/gesture/Pan'

const PanScreen = () => {
  return (
    <View style={styles.container}>
      <Pan />
    </View>
  )
}

export default PanScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
