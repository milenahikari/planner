import { useState } from "react";
import { Text, View } from "react-native";

import { Base } from "@/src/templates/Base";
import { Input } from "@/src/components/Input";
import { Button } from "@/src/components/Button";

export default function Schedule() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSave() {
    console.log(title, description)
  }

  return (
    <Base header={
      <View>
        <Text className='font-poppinsBold text-lg color-gray-950'>Novo agendamento</Text>
        <Text className='font-poppinsMedium text-sm color-gray-200'>Registre seu compromisso</Text>
      </View>
    }>
      <>
        <Input title="Título" value={title} onChangeText={setTitle} />
        <Input title="Descrição (opcional)" value={description} onChangeText={setDescription}/>

        <Button label="Salvar" onPress={handleSave} />
      </>
    </Base>
  );
}