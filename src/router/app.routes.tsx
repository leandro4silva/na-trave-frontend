import {Routes, Route, Navigate} from 'react-router-dom'

import { Profile } from '../pages/Profile'
import { New } from '../pages/New'
import { useAuth } from '../hooks/auth'

export function AppRoutes(){
    const {user} = useAuth();

    return(
        <Routes>
            <Route path="/" element={ user && <Navigate to={"/new"} /> }></Route>
            <Route path="/:username" element={<Profile/>} />
            <Route path="/new" element={ <New />} />
        </Routes>
    )
}