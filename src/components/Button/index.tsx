import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = {
  label: string
} & TouchableOpacityProps;

export function Button({ label, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className="bg-green-50 rounded-xl p-4"
      {...rest}
    >
      <Text className='font-poppinsBold text-md color-green-100 text-center'>{label}</Text>
    </TouchableOpacity>
  )
}