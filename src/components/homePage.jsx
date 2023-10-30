
import ChatComponent from "./homePageElems/chatComponent"
import MainDescrp from "./homePageElems/mainDescrp"
import OnlineConsult from "./homePageElems/onlineConsultComponent"
import SearchComponent from "./homePageElems/searchComponent"
export default function HomePage(){



    return(
        <>
        <MainDescrp></MainDescrp>
        <SearchComponent></SearchComponent>
        <ChatComponent></ChatComponent>
        <OnlineConsult></OnlineConsult>
        </>
    )
}