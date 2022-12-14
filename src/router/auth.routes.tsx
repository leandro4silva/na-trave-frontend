import {Route, Routes} from 'react-router-dom'
import { Landing } from '../pages/Landing'
import { Profile } from '../pages/Profile'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function AuthRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/register' element={<SignUp/>} />
            <Route path='/login' element={<SignIn/>} />
            <Route path="/:username" element={<Profile/>} />
        </Routes>
    )
}