import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const MultilineTextInputExample = () => {
  const [value, onChangeText] = React.useState('About Me :');
  const [text, onChangeName] = React.useState('Name:');
  const [number, onChangeAge] = React.useState('Age:');
  const [address, onChangeAddress] = React.useState('Address:')
  const [school, onChangeSchool] = React.useState('School:');
  const [course, onChangeCouse] = React.useState('Course:');
  const [email, onChangeEmail] = React.useState('Email:');
  const [contact, onChangecontact] = React.useState('Contact:')

  // If you type something in the text box that is a color,
  // the background will change to that color.
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: value,
          },
        ]}>
        <TextInput
          style={styles.container}
          onChangeText={onChangeName}
          value= {text}
        />
        <TextInput
          style={styles.container}
          onChangeText={onChangeAge}
          value= {number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.container}
          onChangeText={onChangeAddress}
          value= {address}
        />
        <TextInput
          style={styles.container}
          onChangeText={onChangeSchool}
          value= {school}
        />
        <TextInput
          style={styles.container}
          onChangeText={onChangeCouse}
          value= {course}
        />
        <TextInput
          style={styles.container}
          onChangeText={onChangeEmail}
          value= {email}
        />
        <TextInput
          style={styles.container}
          onChangeText={onChangecontact}
          value= {contact}
        />
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeText(text)}
          value={value}
          style={styles.textInput}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  textInput: {
    padding: 10,
  },
});

export default MultilineTextInputExample;