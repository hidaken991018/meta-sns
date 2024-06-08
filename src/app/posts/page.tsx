"use client"
import { listPosts } from "@/graphql/queries"
import { useEffect, useState } from 'react';

type Post = {
  id: string;
  title: string;
  content: string;
  image?: string;
}

const Posts = () => {

  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      // setPosts(postData.data.listPosts.items);
    } catch (err) {
      console.log('error fetching posts', err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {post.image && <img src={post.image} alt={post.title} />}
        </div>
      ))}
    </div>
  );
}

export default Posts;