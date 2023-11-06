import { ContainerHeader, LogoHeader } from "../Header/style";
import MenuIcone from "../../assets/MenuIcone.png"


function Mennu(){
    return(
        <>

            <button class="hamburguerButton">
            <LogoHeader src={MenuIcone}/>
            </button>
            <nav class="menulateral">
                
            </nav>
       
        </>
    )
}

export default Mennu