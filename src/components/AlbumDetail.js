import React from 'react';
import {
  Text,
  Image,
  View,
  Linking,
} from 'react-native';
import PropTypes from 'prop-types';
import { Card, CardSection, Button } from './Common';

const styles = {
  thumbNailImageStyle: {
    height: 50,
    width: 50,
  },
  headerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailContainerStyle: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

const {
  imageStyle,
  thumbNailImageStyle,
  headerStyle,
  thumbnailContainerStyle,
  headerTextStyle,
} = styles;

const AlbumDetail = ({ album }) => (
  <Card>
    <CardSection>
      <View style={thumbnailContainerStyle}>
        <Image source={{ uri: album.thumbnail_image }} style={thumbNailImageStyle} />
      </View>
      <View style={headerStyle}>
        <Text style={headerTextStyle}>{album.title}</Text>
        <Text>{album.artist}</Text>
      </View>
    </CardSection>

    <CardSection>
      <Image source={{ uri: album.image }} style={imageStyle} />
    </CardSection>

    <CardSection>
      <Button onPress={() => Linking.openURL(album.url)}>
        Buy Now
      </Button>
    </CardSection>
  </Card>
);

AlbumDetail.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default AlbumDetail;
