# react-native-segemted-switcher

![npm version](https://img.shields.io/npm/v/react-native-segmented-switcher.svg)
![license](https://img.shields.io/npm/l/react-native-segmented-switcher.svg)
[![npm](https://img.shields.io/npm/dt/react-native-segmented-switcher.svg)](https://www.npmjs.com/package/react-native-segmented-switcher)

The SegmentedSwitch package is a versatile React Native component designed to simplify the creation of stylish, highly customizable tabbed selectors. This component offers an elegant, interactive user interface for switching between different contents associated with each tab.

Key features :

Advanced customization: Allows complete customization of styles, including background colors, borders, border radii, and much more. Developers can easily adapt the appearance of the component to the specific needs of their application.

Ease of use: SegmentedSwitch is simple and intuitive to use. Simply provide an array of tabs, each with a label and associated content.

Dynamism: Tab colors, border shapes and other properties can be dynamically adjusted from the parent component, enabling real-time customization according to the context of the application.

Compatibility: The component is compatible with various versions of React Native, making it easy to integrate into a variety of projects.

Reusability: Wrapped in a stand-alone component, SegmentedSwitch can be easily integrated into different parts of your application, promoting code reusability.

Using the SegmentedSwitch package, developers can enhance the user experience by integrating an aesthetically pleasing tabbed selector to match the style of their application.

## Installation

```bash
npm install npm i segmented-switch
```

## Usage

Install package
Import into the page where you want to use it

Example :

```jsx
import React from 'react';
import { SegmentedSwitch } from './SegmentedSwitch';

const tabs = [
    {
      label: 'First',
      content: (
        <>
          <View>
            <Text>First</Text>
          </View>
        </>
      ),
    },
    {
      label: 'Second',
      content: (
        <>
          <View>
            <Text>Second</Text>
          </View>
        </>
      ),
    },
    {
      label: 'Third',
      content: (
        <>
          <View>
            <Text>Third</Text>
          </View>
        </>
      ),
    },
  ];

  const switchButtonStyle = {
    activeColor: 'orange',
    inactiveColor: 'transparent',
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: 'lightblue',
  };

  const touchableStyle = {
    activeColor: 'orange',
    inactiveColor: 'transparent',
    borderRadius: 20,
  };

  const textTouchableStyle = {
    activeColor: '#fff',
    inactiveColor: '#000',
  };

const App = () => {
  return (
    <View>
      <SegmentedSwitch
        tabs={tabs}
        switchButtonStyle={switchButtonStyle}
        touchableStyle={touchableStyle}
        textTouchableStyle={textTouchableStyle}
      />
    </View>
  );
};
export default App;
```
## Customization

You can customize the switchButtonStyle, touchableStyle, and textTouchableStyle.

## An overview
Bellow, this two example of using Segmented Switcher package
![Texte alternatif](https://github.com/Mohamed-78/react-native-segmented-switcher/blob/main/screen_1.png)
![Texte alternatif](https://github.com/Mohamed-78/react-native-segmented-switcher/blob/main/screen_2.png)
