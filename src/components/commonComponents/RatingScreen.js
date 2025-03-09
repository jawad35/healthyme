import React, { useState } from "react";
import { Rating } from 'react-native-ratings';
import { Colors, SF } from "../../utils";
import {Style} from '../../styles';

function RatingScreen(props) {
  return (
    <Rating
      type='custom'
      ratingColor={Colors.amber_color}
      ratingBackgroundColor={Colors.chinese_silver}
      ratingCount={5}
      tintColor={Colors.white_text_color}
      imageSize={SF(14)}
      startingValue={4.5}
      isDisabled={false}
      style={Style.PaddingHorizontal}
    />
  );
};
export default RatingScreen;