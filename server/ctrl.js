module.exports = {
  getPosts: (req, res) => {
    const db = req.app.get("db");
    db.get_posts()
      .then(posts => res.status(200).send(posts))
      .catch(error => res.status(500).send(error));
  },
  getPostsByID:(req, res) => {
    const db = req.app.get("db");
    // console.log('HIT', req.params)
    let { id } = req.params;
    db.get_post_byID([id])
    .then(post => res.status(200).send(post))
    .catch(error => res.status(500).send(error));
  },
  addPost: (req, res) => {
    const db = req.app.get("db");
    const { title, date, pic, text } = req.body;
    db.add_post([title, date, pic, text])
      .then(posts => res.status(200).send(posts))
      .catch(error => res.status(500).send(error));
  },
  updatePost: (req, res) => {
    console.log("HIT update");
    
    const db = req.app.get("db");
    const { text } = req.body;
    const { id } = req.params;
    db.update_post([id, text])
      .then(post => res.status(200).send(post))
      .catch(error => res.status(500).send(error));
  },
  deletePost: (req, res) => {
    console.log("hit delete")
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_post([id])
      .then(post => res.status(200).send(post))
      .catch(error => res.status(500).semd(error));
  }
};
