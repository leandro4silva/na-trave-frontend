import {Routes, Route} from 'react-router-dom'

import { Profile } from '../pages/Profile'
import { New } from '../pages/New'

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/profile" element={<Profile/>} />
            <Route path="/new" element={ <New />} />
        </Routes>
    )
}