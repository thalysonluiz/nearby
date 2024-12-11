import { ActivityIndicator, Text, TextProps, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { IconProps as TablerIconProps } from '@tabler/icons-react-native';
import { styles } from './styles';
import { colors } from '@/styles/colors';
import React from 'react';

type ButtonPropos = TouchableOpacityProps & {
  isLoading?: boolean
}

function Button({ children, style, isLoading = false, ...rest }: ButtonPropos) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, style]}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? <ActivityIndicator size="small" color={colors.gray[100]} /> : children}
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  return <Text style={styles.title}>
    {children}
  </Text>
}

type IconProps = TablerIconProps & {
  icon: React.ComponentType<TablerIconProps>
}

function Icon({ icon: Icon }: IconProps) {
  return <Icon size={24} color={colors.gray[100]} />
}

Button.Title = Title
Button.Icon = Icon

export { Button }