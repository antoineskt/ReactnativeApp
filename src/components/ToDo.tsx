import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { HabitContext } from '../context/HabitContext';

import Trash from '../../assets/trash.svg';
import Edit from '../../assets/edit.svg';

interface ToDoProps {
  id: string;
  name: string;
}

export default function ToDo({ id, name }: ToDoProps) {
  const { deleteTask, editTask } = useContext(HabitContext);
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  function handleChange(text: string) {
    setNewName(text);
  }

  function handleSubmit() {
    editTask(id, newName);
    setNewName('');
    setEditing(false);
  }

  const windowWidth = Dimensions.get('window').width;

  const normalTemplate = (
    <View
      style={{
        backgroundColor: 'black',
        flexDirection: 'row',
        borderRadius: 8,
        padding: 10,

        marginTop: '10%',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: windowWidth * 0.9,
      }}
    >
      <Text style={{ color: 'white', fontSize: 19 }}>{name}</Text>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity
          onPress={() => setEditing(true)}
          style={{ paddingRight: 7 }}
        >
          <Edit fill={'white'} width={15} height={15} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => deleteTask(id)}>
          <Trash fill={'white'} width={15} height={15} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const editTemplate = (
    <View>
      <View>
        <Text>Nouveau nom pour "{name}" :</Text>
        <TextInput
          value={newName}
          onChangeText={handleChange}
          style={{ color: 'white', backgroundColor: 'black' }}
        />
      </View>
      <TouchableOpacity onPress={() => setEditing(false)}>
        <Text>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );

  return <View>{isEditing ? editTemplate : normalTemplate}</View>;
}
