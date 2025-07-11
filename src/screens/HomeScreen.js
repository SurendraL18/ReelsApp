import React, { useRef, useState } from 'react';
import { FlatList, View, StyleSheet, Dimensions } from 'react-native';
import Reel from '../components/Reel';

const reels = [
  {
    id: '1',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    profile: 'user1',
    caption: 'Reel 1 - Morning vibes!',
  },
  {
    id: '2',
    video: 'https://www.w3schools.com/html/movie.mp4',
    profile: 'user2',
    caption: 'Reel 2 - Adventure time!',
  },
  {
    id: '3',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    profile: 'user3',
    caption: 'Reel 3 - Dance challenge!',
  },
  {
    id: '4',
    video: 'https://www.w3schools.com/html/movie.mp4',
    profile: 'user4',
    caption: 'Reel 4 - Cooking hacks!',
  },
  {
    id: '5',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    profile: 'user5',
    caption: 'Reel 5 - Gym day!',
  },
];

const { height } = Dimensions.get('window');

const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={reels}
        renderItem={({ item, index }) => (
          <Reel item={item} isActive={currentIndex === index} />
        )}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={{ itemVisiblePercentThreshold: 80 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default HomeScreen;
