import React, { useContext, useState } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostScreen from '../components/BlogPostForm'

const CreateScreen = ({ navigation }) => {

  const { addBlogPost } = useContext(Context)

  return <BlogPostScreen onSubmit={(title, content) => {
    addBlogPost(title, content, () => navigation.navigate('Index'))
  }} />
}

export default CreateScreen