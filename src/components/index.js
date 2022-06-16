import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState } from "react";


import SignUp from "./signUp/SignUp";
import Timeline from "../templates/timeline/timeline";

import UserContext from "../contexts/UserContext";
import isLoadingContext from "../contexts/isLoadingContext"
import isModalOpenContext from "../contexts/isModalOpenContext"


function App() {
    const [isLoading, setIsLoading] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const [userData, setUserData] = useState({})

    useEffect(() => {
        async function getUser () {
            try {
                const user = await axios.get("http://localhost:5000/session", { withCredentials: true });
                setUserData(user);
            } catch (error) {
                alert('Session expired');
            }
            
        }
        getUser();
    }, []);

    const contextValue = { userData, setUserData }

    return (
        <>
            <BrowserRouter>
                <isLoadingContext.Provider value={{isLoading, setIsLoading}}>
                    <isModalOpenContext.Provider value={{isModalOpen, setIsModalOpen}}>
                        <UserContext.Provider value={contextValue}>
                                <Routes>
                                        <Route path="/timeline" element={<Timeline />} />
                                        <Route path="/sign-up" element={<SignUp />} />
                                </Routes>
                        </UserContext.Provider>
                    </isModalOpenContext.Provider>  
                </isLoadingContext.Provider>                         
            </BrowserRouter>
        </>
    )
}

export default App;