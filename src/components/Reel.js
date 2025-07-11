
import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../slices/uiSlice';

const { height, width } = Dimensions.get('window');

const Reel = ({ item, isActive }) => {
  const dispatch = useDispatch();
  const liked = useSelector(state => state.ui.likes[item.id]);

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: item.video }}
        style={styles.video}
        resizeMode="cover"
        repeat
        paused={!isActive}
      />

      {/* Overlay UI */}
      <View style={styles.overlay}>
        <View style={styles.rightPanel}>
          <TouchableOpacity style={styles.iconWrapper} onPress={() => dispatch(toggleLike({ id: item.id }))}>
            <Icon name="heart" size={32} color={liked ? 'red' : 'white'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrapper}>
            <Icon name="comment" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrapper}>
            <Icon name="share" size={28} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomLeft}>
          <Text style={styles.username}>{item.profile}</Text>
          <Text style={styles.caption}>{item.caption}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
    backgroundColor: 'black'
  },
  video: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  rightPanel: {
    position: 'absolute',
    right: 10,
    bottom: 100,
    alignItems: 'center',
    gap: 18,
  },
  iconWrapper: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 10,
    borderRadius: 50,
  },
  bottomLeft: {
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  username: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  caption: {
    color: 'white',
    fontSize: 14,
  },
});

export default Reel;
