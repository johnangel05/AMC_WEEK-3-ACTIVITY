import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [text, onChangeName] = React.useState('Name');
  const [number, onChangeAge] = React.useState('Age');
  const [address, onChangeAddress] = React.useState('Address')
  const [school, onChangeSchool] = React.useState('School');
  const [course, onChangeCouse] = React.useState('Course');
  const [email, onChangeEmail] = React.useState('Email');
  const [contact, onChangecontact] = React.useState('Contact');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value= {text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value= {number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value= {address}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value= {school}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCouse}
          value= {course}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value= {email}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangecontact}
          value= {contact}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;