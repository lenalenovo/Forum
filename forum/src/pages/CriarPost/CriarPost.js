import React, { useState } from "react";
import HeaderPerfil from "../../componentes/Header/HeaderPerfil";
import Menu from "../../componentes/Menu/Menu";
import { AreaTitulo, ButtonStyle, CardBolinha, ContainerCriarPost, FormStyle, InputStyle, InputTitulo, TextareaStyle } from "./styles";
import Historicos from "../../componentes/Historicos/Historicos";
import { createPost } from "../../services/requests";
import { useVerificarToken } from "../../hooks/useverificarToken";
import { ContainerCenter, GeralPost } from "../../GlobalStyled";

const CriarPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [hashtag, setHashtag] = useState(""); 
  // const [description, setDescription] = useState(" ")

  
  const criarPostAPI = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Título e conteúdo são campos obrigatórios.");
      return;
    }

    const hashtagsArray = hashtag.split(",");

    await createPost(title, content, image, /*description*/ hashtagsArray)
      .then((response) => {
        console.log("Post criado com sucesso!", response);
      })
      .catch((err) => {
        console.error("Erro ao criar o post:", err);
      });
  };

   console.log(title)
   console.log(content)
   console.log(image)
  

  useVerificarToken()

  return (
    <>
    <HeaderPerfil titulo={"New Question"} />
      <GeralPost>
      <ContainerCenter>
      <ContainerCriarPost>
        <FormStyle onSubmit={criarPostAPI}>
          <AreaTitulo>
          <CardBolinha>
            
          </CardBolinha>

          <InputTitulo
            placeholder="Título"
            value={title || ''}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          </AreaTitulo>

          <TextareaStyle
            placeholder="Conteúdo"
            value={content || ''}
            onChange={(e) => setContent(e.target.value)}
            required
          />
           {/* <TextareaStyle
            placeholder="Descrição"
            value={description || ''}
            onChange={(e) => setDescription(e.target.value)}
          /> */}

          <InputStyle
            type="text" // Use um input de texto para inserir as hashtags
            placeholder="Hashtags (separadas por vírgulas)"
            value={hashtag || ''}
            onChange={(e) => setHashtag(e.target.value)}
          />

          <InputStyle
            type="text"
            label="Imagem"
            value={image || ''}
            placeholder="Digite o endereço da imagem" 
            onChange={(e) => setImage(e.target.value)}
          />

          
            <ButtonStyle type="submit">Enviar</ButtonStyle>

        </FormStyle>
      </ContainerCriarPost>
      </ContainerCenter>
      </GeralPost>
    </>
  );
};

export default CriarPost;
