import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (

<View style={{ backgroundColor: 'skyblue', flex: 1,                }}>                           
<View style={{ backgroundColor: 'red', height:100, 
  justifyContent: "center", alignItems: "center" }}><Text>RÖD</Text></View>


<View style={{ backgroundColor: 'white', height: 100, flexDirection: 'row' }}>

<View style={{ backgroundColor: 'green', flex: 1 }}><Text>GRÖN</Text></View>
<View style={{ backgroundColor: 'yellow', flex: 1  }}></View>
</View>

<View style={{ backgroundColor: 'white', height: 50, flexDirection: 'row' }}>

<View style={{ backgroundColor: 'red', flex: 3 }}></View>
<View style={{ backgroundColor: 'black', flex: 1  }}></View>
</View>











</View>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
