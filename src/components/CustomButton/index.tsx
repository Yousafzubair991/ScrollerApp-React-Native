import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {RH, RW} from '../../styles/responsive';
import {colors} from '../../styles/colors';
import {TButtonProps} from '../../constants/types';

const CustomButton: React.FC = ({
  title,
  onPress,
  backgroundColor,
  width,
  height,
  loading,
  disabled,
  textColor,
  maxWidth,
  marginVertical,
  borderColor,
  borderWidth,
  borderRadius,
}: TButtonProps) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.wrapper,
          {
            backgroundColor: disabled
              ? 'rgba(0,0,0,0.2)'
              : backgroundColor
              ? backgroundColor
              : colors?.lightBlue4,
            width: width ? width : RW(100),
            height: height ? height : RH(6),
            maxWidth: maxWidth ? maxWidth : RW(40),
            marginVertical: marginVertical ? marginVertical : 10,
            borderColor: borderColor ? borderColor : null,
            borderWidth: borderWidth ? borderWidth : 0,
            borderRadius: borderRadius ? borderRadius : 3,
          },
        ]}>
        {loading ? (
          <ActivityIndicator color={textColor ? textColor : colors.white} />
        ) : (
          <Text
            style={[
              styles?.buttonText,
              {
                color: disabled
                  ? colors.black
                  : textColor
                  ? textColor
                  : colors.white,
              },
            ]}>
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    borderRadius: 100,
    overflow: 'hidden',
    // borderWidth: 0.5,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 12,
    textTransform: 'uppercase',
  },
});

export default CustomButton;
