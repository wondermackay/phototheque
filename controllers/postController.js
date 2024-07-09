const Post = require('../models/Post')


exports.getPost = async (req, res) => {

  try{
    const posts = await Post.find();  //Récupère tous les posts
    console.log('tous mes post', posts)
    res.render('home', {posts})
  }catch(error){
    console.error("Erreur lors de la récupération des posts :", error);
    res.status(500).send("Erreur lors de la récupération des posts.");
  }
}

exports.deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) {
      return res.status(404).send({ message: "Post non trouvé." });
    }

    // Redirection vers la vue home après la suppression du post
    res.redirect('/home');
  } catch (error) {
    res.status(500).send({ message: "Erreur lors de la suppression du post.", error: error.message });
  }
}