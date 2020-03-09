const fakePost = require("../db/fakepost.json");
const Post = require("../models/Form");

const initialData = fakePost.map(item => {
  const posts = {
    postTitle: item.title,
    postComment: item.comment,
    randomCatImg: item.url,
    postDate: item.date
  };
  return posts;
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
