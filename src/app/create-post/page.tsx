"use client"
import { generateClient } from 'aws-amplify/api';
import { createPost } from '@/graphql/mutations';
import { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const client = generateClient()

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const input = { title, content, image };
    try {
      const res = await client.graphql({ query: createPost, variables: { input: { userId: "", imageUrl: "" } } });
      setTitle('');
      setContent('');
      setImage('');
    } catch (err) {
      console.log('error creating post:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
