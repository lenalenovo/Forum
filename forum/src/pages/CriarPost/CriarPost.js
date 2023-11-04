import React, { useState } from "react";
import HeaderPerfil from "../../componentes/Header/HeaderPerfil";
import Menu from "../../componentes/Menu/Menu";
import { ButtonStyle, ContainerCriarPost, FormStyle, InputStyle, TextareaStyle } from "./styles";
import Historicos from "../../componentes/Historicos/Historicos";
import { createPost } from "../../services/requests";
import { useVerificarToken } from "../../hooks/useverificarToken";

const CriarPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [hashtag, setHashtag] = useState(""); 

  
  const criarPostAPI = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Título e conteúdo são campos obrigatórios.");
      return;
    }

    const hashtagsArray = hashtag.split(",");

    await createPost(title, content, image, hashtagsArray)
      .then((response) => {
        console.log("Post criado com sucesso!", response);
      })
      .catch((error) => {
        console.error("Erro ao criar o post:", error);
      });
  };

  useVerificarToken()

  return (
    <>
      <HeaderPerfil titulo={"New Question"} />
      <ContainerCriarPost>
        <Menu />
        <FormStyle onSubmit={criarPostAPI}>
          <InputStyle
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <TextareaStyle
            placeholder="Conteúdo"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <InputStyle
            type="text" // Use um input de texto para inserir as hashtags
            placeholder="Hashtags (separadas por vírgulas)"
            value={hashtag}
            onChange={(e) => setHashtag(e.target.value)}
          />

          <InputStyle
            type="text"
            label="Imagem"
            placeholder="Digite o endereço da imagem" 
            onChange={(e) => setImage(e.target.value)}
          />

          
            <ButtonStyle type="submit">Enviar</ButtonStyle>

        </FormStyle>

        <Historicos />
      </ContainerCriarPost>
    </>
  );
};

export default CriarPost;
