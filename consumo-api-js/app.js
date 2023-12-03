// Função para exibir os posts na tela
function showPosts(posts) {
    posts.forEach(post => {
      console.log(`ID: ${post.id}`);
      console.log(`Título: ${post.title}`);
      console.log(`Texto: ${post.body}`);
      console.log('---');
    });
  }
  
  // Executa a função assíncrona para obter os posts e exibi-los na tela
  getPosts()
    .then(posts => {
      showPosts(posts);
    })
    .catch(error => {
      console.error(error);
    });