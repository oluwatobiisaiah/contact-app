import {NavigationContainer} from "@react-navigation/native"
import { useContext } from "react";
import { GlobalContext } from "../hooks/reducers/Provider";
import AuthNavigator from "./AuthNavigator";
import StacKNavigator from "./StackNavigator";

const AppNavContainer = ()=>{
    const {authState:{isLoggedIn}} = useContext(GlobalContext)
    return(
        <NavigationContainer >
{isLoggedIn?<StacKNavigator/>:<AuthNavigator/>}
        </NavigationContainer>
    )
}

export default AppNavContainer