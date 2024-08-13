import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import colors from "@/colors";

type ButtonProps = {
  label: string,
  isLoading?: boolean
} & TouchableOpacityProps;

export function Button({ label, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className="w-full bg-green-50 rounded-xl p-4"
      {...rest}
    >
      {isLoading
        ? <ActivityIndicator color={colors.green[100]} />
        : <Text className='font-poppinsBold text-md color-green-100 text-center'>{label}</Text>}
    </TouchableOpacity>
  )
}