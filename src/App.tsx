import React from 'react';
import cl from './App.module.scss'
import {LeftSide, Users} from "./components";
import {Routes, Route} from "react-router-dom";
import cn from "classnames";

import {AppProvider} from "./contexts/AppContext";
import UserProfile from "./components/Users/UserProfile";
const App = () => {

    return (
        <AppProvider>
        <div className={cl.wrapper}>
            <LeftSide/>
            <main className={cl.main}>
                <Routes>
                    <Route path={'/'} element={<Users/>}/>
                    <Route path={':id'} element={<UserProfile/>}/>
                </Routes>
            </main>
        </div>
        </AppProvider>
    );
};

export default App;
