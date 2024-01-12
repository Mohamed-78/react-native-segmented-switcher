import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const SegmentedSwitch = ({
  tabs,
  switchButtonStyle,
  touchableStyle,
  textTouchableStyle
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const defaultStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    switchButtonContainer: {
      width: '90%',
      alignSelf: 'center',
      marginTop: 50,
      height: 60,
      borderWidth: 0.5,
      backgroundColor: 'white',
      borderRadius: 15,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 5,
      paddingRight: 5,
    },
    touchable: {
      flex: 1,
      height: 45,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textTouchable: {
      fontSize: 18,
      fontWeight: '700',
    },
    elementContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  const styles = StyleSheet.create({
    ...defaultStyles,
    switchButtonContainer: {
      ...defaultStyles.switchButtonContainer,
      ...switchButtonStyle,
    },
    touchable: {
      ...defaultStyles.touchable,
      ...touchableStyle,
    },
    textTouchable: {
      ...defaultStyles.textTouchable,
      ...textTouchableStyle,
    },
  });

  const handleTabPress = (index) => {
    setSelectedTab(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.switchButtonContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.touchable,
              {
                backgroundColor: selectedTab === index ? switchButtonStyle.activeColor : switchButtonStyle.inactiveColor,
              },
            ]}
            onPress={() => handleTabPress(index)}>
            <Text
              style={[
                styles.textTouchable,
                {
                  color: selectedTab === index ? textTouchableStyle.activeColor : textTouchableStyle.inactiveColor,
                },
              ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.elementContainer}>
        {React.cloneElement(tabs[selectedTab].content, {})}
      </View>
    </View>
  );
};
