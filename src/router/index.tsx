import {BrowserRouter} from 'react-router-dom'

import {AuthRoutes} from './auth.routes'
import {AppRoutes} from './app.routes'

export function Router(){
    return(
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    )
}