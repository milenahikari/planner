import { Text, TextInput, TextInputProps, View } from "react-native";

type InputProps = {
  title: string;
} & TextInputProps;

export function Input({title, ...rest }: InputProps) {
  return (
    <View>
      <Text className='font-poppinsMedium text-sm color-gray-200'>{title}</Text>
      
      <TextInput
        className="bg-gray-100 text-gray-900 h-11 rounded-xl  mt-1 mb-3 p-2"
        {...rest}
      />
    </View>
  )
}