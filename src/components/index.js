import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import UserContext from "../contexts/UserContext";

import SignInScreen from "./signInScreen";

function App() {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        async function getUser () {
            const user = await axios.get("http://localhost:5000/session", { withCredentials: true });
            setUserData(user);
        }
        getUser();
    }, []);

    const contextValue = { userData, setUserData };

    return (
        <>
            <BrowserRouter>
                <UserContext.Provider value={contextValue}>
                    <Routes>
                        <Route path="/" element={<SignInScreen />} />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </>
    )
}

export default App;