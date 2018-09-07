module.exports = {
  getPosts: (req, res) => {
    console.log("ive been hit!!");
    const db = req.app.get("db");
    db.get_posts()
      .then(posts => res.status(200).send(posts))
      .catch(error => res.status(500).send(error));
  },
  addPost: (req, res) => {
    const { title, date, pic, text } = req.body;
    const db = req.app.get("db");
    db.add_post([title, date, pic, text])
      .then(posts => res.status(200).send(posts))
      .catch(error => res.status(500).send(error));
  }
};
