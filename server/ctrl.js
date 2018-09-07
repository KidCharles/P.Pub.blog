module.exports = {
  getPosts: (req, res) => {
    console.log("ive been hit!!");
    const db = req.app.get("db");
    db.get_posts()
      .then(posts => res.status(200).send(posts))
      .catch(error => res.status(500).send(error));
  }
};
