import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'

const BlogPostForm = ({ onSubmit, editable }) => {
  const [title, setTitle] = useState(editable.title);
  const [content, setContent] = useState(editable.content);

  return <View>
    <Text style={styles.label}>Blog Title</Text>
    <TextInput
      style={styles.input}
      value={title}
      onChangeText={text => setTitle(text)} />
    <Text style={styles.label}>Blog Content</Text>
    <TextInput
      style={styles.input}
      value={content}
      onChangeText={text => setContent(text)} />
    <Button
      title="Save"
      onPress={() => onSubmit(title, content)}
    />
  </View>
}

BlogPostForm.defaultProps = {
  editable: {
    title: '',
    content: ''
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    marginBottom: 10,
    padding: 5,
    margin: 5,
  },
  input: {
    fontSize: 20,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    marginBottom: 5,
  }
})

export default BlogPostForm;