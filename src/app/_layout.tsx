import { colors } from '@/styles/theme'
import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.gray[100] }
      }}
    />
  )
}