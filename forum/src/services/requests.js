import axios from "axios"
import { BASE_URL } from "../constants/url"


const token = localStorage.getItem('token');

export const getPost = (salvarPost) => {

  axios.get(`${BASE_URL}/post`, { headers: { 'Authorization': token } })
    .then((response) => {
      salvarPost(response.data)
    })
    .catch((err) => { console.log(err.response) })
}

export const getPostAll = (salvarPosts) => {
  axios.get(`${BASE_URL}/post/all`)
    .then((response) => {
      salvarPosts(response.data)
    })
    .catch((err) => { console.log(err) })
}

export const createPost = (title, content, image, hashtag) =>  {
  return new Promise((resolve, reject) => {
    let body = {
      'title': title,
      'content': content,
      'image': image,
      'hashtag': hashtag,
    };

    // console.log(body)
    axios.post(`${BASE_URL}/post/create`, body, { headers: { Authorization: token } })
      .then((response) => {
        getPostAll()
        resolve(response.data); // Resolvendo a Promessa com os dados da resposta
        console.log('body', body)
      })
      .catch((err) => {
        reject(err); // Rejeitando a Promessa em caso de erro
      });
  });
};

export const editPost = (title) => {

  const body = {
    "title": title
  }

  axios.put(`${BASE_URL}/post/edit/:id`, body, { headers: { Authorization: token } })
    .then((response) => {
      getPost()
    })
    .catch((erro) => {
      return (erro.response)
    })
}



export const deletePost = (id) => {

  axios.get(`${BASE_URL}/post/delete/${id}`, { headers: { Authorization: token } })
    .then((response) => {
      console.log(response)
    })
    .catch((erro) => {
      return (erro.response)
    })
}


export const createComment = (postId, comment) => {
  const body = {
    'postId': postId,
    'comment': comment
  };

  axios.post(`${BASE_URL}/comment/create`, body, { headers: { Authorization: token } })
    .then((response) => {
      getPostAll()

    })
    .catch((error) => {
      console.error("Erro ao criar o comentário:", error);
    });
};



