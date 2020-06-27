import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'delete_blogpost':
      return state.filter((item) => item.id !== action.payload)
    case 'add_blogpost':
      const id = Math.floor(Math.random() * 99999)
      return [...state, {
        id: id,
        title: `Blog Post #${id}`
      }];
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return () => {
    dispatch({ type: 'add_blogpost' });
  };
};

const deleteBlogPost = dispatch => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id })
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
