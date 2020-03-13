const fakePost = require("../db/fakepost.json");
const fakeBlog = require("../db/fakeblog.json");
const Post = require("../models/Form");
const Blog = require("../models/Blog");

const initialData = fakePost.map(item => {
  const posts = {
    postTitle: item.title,
    postComment: item.comment,
    randomCatImg: item.url,
    postDate: item.date
  };
  return posts;
});

const blogData = fakeBlog.map(item => {
  const blogs = {
    author: item.author,
    courseWeek: item.courseWeek,
    title: item.title,
    confidenceInYourContent: item.confidenceInYourContent,
    content: item.content
  };
  return blogs;
});

Post.remove({});
Post.collection
  .insert(initialData)
  .then(posts => {
    console.log(posts);
  })
  .catch(err => {
    console.log(err);
  });

Blog.remove({});
Blog.collection
  .insert(blogData)
  .then(blogs => {
    console.log(blogs);
  })
  .catch(err => {
    console.log(err);
  });
