import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {
  Gesture,
  GestureHandlerRootView,
  GestureDetector,
} from 'react-native-gesture-handler'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

/**
 * 
 * 👉To convert a JavaScript function into a serializable object which can be copied and ran over on UI thread.
   Functions marked with "worklet"; directive are automatically picked up and workletized by the Reanimated Babel plugin.
 */

// Learning tap gesture
const Tap = () => {
  const pressed = useSharedValue(false)

  const tap = Gesture.Tap()
    .onBegin(() => {
      pressed.value = true
    })
    .onFinalize((event) => {
      console.log('Event ==>', event)
      pressed.value = false
    })

  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: pressed.value ? '#FFE04B' : '#B58DF1',
    transform: [
      {
        scale: withTiming(pressed.value ? 2 : 1, {
          duration: 300,
          easing: Easing.ease,
        }),
      },
    ],
  }))

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <GestureDetector gesture={tap}>
          <Animated.View style={[styles.circle, animatedStyles]} />
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  )
}

export default Tap

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  circle: {
    height: 120,
    width: 120,
    borderRadius: 500,
  },
})
