import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { Button } from 'react-native'
import { View } from '../Themed'

/**
 * This is the FirstAnimation component
 * Step 1: Create a Animated View component
 * Step 2: Defining a Shared Value, which is driving factor of all our animation.
 * Step 3: Add a Animation function to change the value of the Shared Value
 * Step 4: How to useAnimationStyle to write complex animation logic
 * Step 5: Same as useAnimationStyle we can pass props to function so that we can access the value stored in a shared value.
 * This can add additional control over the animation.
 * Step 6: Reanimated comes with just a handful of built-in components like Animated.View or Animated.ScrollView.
 * For components which aren't a part of Reanimated, to make their props animatable,
 * we need to wrap them with createAnimatedComponent
 * @returns
 */
export default function FirstAnimation() {
  const translateX = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(translateX.value * 2, {
          duration: 200,
          easing: Easing.inOut(Easing.quad),
        }),
      },
    ],
  }))

  const handleAnimation = () => {
    if (translateX.value >= 300) {
      translateX.value = withTiming(100)
    } else {
      translateX.value = withTiming(translateX.value + 50)
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: 'violet',
          },
          animatedStyles,
        ]}
      />
      <Button title='Animate' onPress={handleAnimation} />
    </View>
  )
}
