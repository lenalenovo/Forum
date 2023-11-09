import { useEffect, useState } from "react"
import { GlobalStateContect } from "./GlobalStateContext"
import axios from "axios";
import { BASE_URL } from "../constants/url";



export const GlobalState = ({children})=>{
    let [forumTopics, setForumTopics] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null); 

    function loadForumTopics() {

        const token = localStorage.getItem('token');

        const config = {
            headers: {
              Authorization: token,
            },
          };

          axios.get(`${BASE_URL}/api/post/all`, config)
          .then((response)=>{
            // console.log(response)
            setForumTopics(response.data)
          })
          .catch((error) =>{
            console.error('Erro ao carregar tópicos do fórum', error)
          })
        }
          useEffect(()=>{
            loadForumTopics()
          },[])

              
          let states = {forumTopics}
          let setters = {setForumTopics}
          let requests = {loadForumTopics}

    return(

        <GlobalStateContect.Provider value={{states, setters, requests, selectedPostId, setSelectedPostId}}>
            {children}
        </GlobalStateContect.Provider>
    )


}