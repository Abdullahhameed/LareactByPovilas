import './bootstrap';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import PostsCreate from "./Pages/Posts/Create.jsx";
import PostsEdit from "./Pages/Posts/Edit.jsx";
import PostsIndex from "./Pages/Posts/PostsIndex.jsx";
import App from './Layouts/App.jsx';
import Guest from './Layouts/Guest';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';

import { AbilityContext } from './Abilities/Can';
import Ability from './Abilities/Ability'

const root = createRoot(document.getElementById('app')); // createRoot(container!) if you use TypeScript
root.render(
        <AbilityContext.Provider value={Ability}>
            <BrowserRouter>
                <Routes>
                    <Route path='posts' element={<App />}>
                        <Route index element={<PostsIndex />}></Route>
                        <Route path="/posts/create" element={<PostsCreate />}></Route>
                        <Route path="/posts/edit/:id" element={<PostsEdit />}></Route>
                    </Route>
                    <Route path='login' element={<Guest />}>
                        <Route index element={<Login />}></Route>
                    </Route>
                    <Route path='register' element={<Guest />}>
                        <Route index element={<Register />}></Route>
                    </Route>
                    <Route path='*' element={<Navigate to="/posts" replace />} />
                </Routes>
            </BrowserRouter>
        </AbilityContext.Provider>
    );

// const container = document.getElementById('app');

// import Alpine from 'alpinejs';

// window.Alpine = Alpine;

// Alpine.start();
