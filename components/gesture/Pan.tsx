import { View, StyleSheet } from 'react-native'
import React from 'react'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler'

const Pan = () => {
  const pressed = useSharedValue(false)
  const offset = useSharedValue({ x: 0, y: 0 })
  const start = useSharedValue({ x: 0, y: 0 })

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true
    })
    .onUpdate((event) => {
      offset.value = {
        x: event.translationX + start.value.x,
        y: event.translationY + start.value.y,
      }
    })
    .onEnd(() => {
      offset.value = {
        x: withSpring(offset.value.x),
        y: withSpring(offset.value.y),
      }
    })
    .onFinalize(() => {
      pressed.value = false
    })

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
        { scale: withSpring(pressed.value ? 1.2 : 1) },
      ],
      backgroundColor: pressed.value ? 'yellow' : 'blue',
    }
  })

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.circle, animatedStyles]} />
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  )
}

export default Pan

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
