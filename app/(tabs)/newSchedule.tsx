import { useState } from "react";
import { Text, View } from "react-native";
import { router } from 'expo-router';

import { Base } from "@/src/templates/Base";
import { Input } from "@/src/components/Input";
import { Button } from "@/src/components/Button";

import { api } from "@/src/services/api";

export default function Schedule() {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function reset() {
    setTitle('');
    setDescription('');
  }

  async function handleSave() {
    try {
      setIsLoading(true);
      
      await api.post('schedule', {
        title,
        description
      });

      reset();
      router.replace('/')      
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
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

        <Button label="Salvar" onPress={handleSave} isLoading={isLoading} />
      </>
    </Base>
  );
}