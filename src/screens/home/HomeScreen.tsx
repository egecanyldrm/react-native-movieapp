import { Appearance, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React, { PropsWithChildren, useCallback, useMemo } from 'react'
import { colors } from '../../styles/general';
import Icon from 'react-native-vector-icons/Feather'
import Animated, { Easing, FadeIn, FadeInDown, FadeInUp, FadeOut, FadeOutDown, FadeOutUp } from 'react-native-reanimated';

type Props = {}

const HomeScreen = (props: Props): JSX.Element => {

   // THEME APPEARANCE
   const isDarkMode = useColorScheme() === 'dark';


   // HANDLER FUNCTIONS 
   const handleChangeAppearance = useCallback(() => {
      if (isDarkMode) {
         Appearance.setColorScheme('light')
         colors.textColor.textColorByAppearance = colors.textColor.black
      }
      else {
         Appearance.setColorScheme('dark')
         colors.textColor.textColorByAppearance = colors.textColor.white
      }
   }, [isDarkMode])

   // STYLES 
   const styles = useMemo(() => styling(colors.textColor.textColorByAppearance), [isDarkMode])
   const backgroundStyle = { backgroundColor: isDarkMode ? colors.primary.dark : colors.textColor.whiteGrey }
   return (
      <SafeAreaView style={backgroundStyle}>
         <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
         <View style={styles.header}>
            <View>
               <Text style={styles.headerTitle}>Hello there !</Text>
               <Text style={styles.headerSubTitle}>Let's stream your favorite movie</Text>
            </View>
            <Pressable onPress={handleChangeAppearance}>
               {isDarkMode ?
                  <Animated.View entering={FadeIn.duration(300).easing(Easing.ease)} exiting={FadeOut.duration(300)}  >
                     <Icon name='sun' color='white' size={30} />
                  </Animated.View>
                  :
                  <Icon name='moon' size={30} />
               }
            </Pressable>
         </View>
      </SafeAreaView>
   );
}

export default HomeScreen

const styling = (textColor: string) => StyleSheet.create({
   header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      paddingVertical: 10
   },
   headerTitle: {
      color: textColor,
      fontSize: 18,
      fontWeight: '600',
   },
   headerSubTitle: {
      color: colors.textColor.grey
   }
})