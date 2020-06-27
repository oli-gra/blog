import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';


const EditScreen = ({ navigation }) => {

  const { state } = useContext(Context)
  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id')
  )
  return <BlogPostForm
    editable={{ title: blogPost.title, content: blogPost.content }}
    onSubmit={(title, content) => {

    }}
  />
}
export default EditScreen;
