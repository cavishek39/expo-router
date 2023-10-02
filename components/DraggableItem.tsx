import { useState } from 'react'
import { Animated, PanResponder, StyleSheet, View } from 'react-native'

export const DraggableItem = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const pan = new Animated.ValueXY({ x: 0, y: 0 })

  // Create a function that will update the position state when called
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
  })

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={
        (styles.draggableItem,
        [{ transform: [{ translateX: pan.x }, { translateY: pan.y }] }])
      }
    />
  )
}

const styles = StyleSheet.create({
  draggableItem: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    position: 'absolute',
  },
})
