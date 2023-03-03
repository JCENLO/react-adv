import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes';
import logo from '../assets/react.svg'
// import logo from '../logo.svg'



export const Navigation = () => {
    return (
        <Suspense fallback={ <span>Loading...</span> }>

            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } alt="React Logo" style={{padding: 20}} />
                        <ul>
                            
                            {
                                routes.map((route) => (
                                    <li key={ route.to }>
                                        <NavLink 
                                            to={ route.to } 
                                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
                                            { route.name }
                                        </NavLink>
                                    </li>
                                ))
                                    
                            }
                            
                            
                        </ul>
                    </nav>


                    <Routes>
                        
                        {
                            routes.map( (route) => {
                                console.log("1", route)
                                return (

                                <Route 
                                    key={ route.to }
                                    path={ route.path }
                                    element={ < route.Component /> } 
                                />
                                )
                            })
                        }

                        
                        <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}



// import { Suspense } from "react"
// import { routes } from './routes';
// import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"
// // import reactLogo from '../assets/react.svg'



// export const Navigation = () => {
//     return (
//         <>
//             <Suspense fallback={<span>LOADING</span>}  >
//             <BrowserRouter>
//                 <div className="main-layout">
//                     <nav>
//                         {/* <img src={reactLogo} alt="logo" /> */}
//                         <ul>
//                         <li >
//                                         <NavLink
//                                             to="/"
//                                             className={({ isActive }) => isActive ? 'nav-active' : ''}
//                                         >
//                                             Link1
//                                         </NavLink>
//                                     </li>

//                             {/* {
//                                 routes.map(route => (
//                                     <li key={route.to}>
//                                         <NavLink
//                                             to={route.to}
//                                             className={({ isActive }) => isActive ? 'nav-active' : ''}
//                                         >
//                                             {route.name}
//                                         </NavLink>
//                                     </li>
//                                 ))
//                             } */}

//                         </ul>
//                     </nav>

//                     <Routes>
//                         r
//                         {/* {
//                             routes.map((route, index) => (
//                                 <Route
//                                     key={index}
//                                     path={route.path}
//                                     element={<route.Component />}
//                                 />
//                             ))
//                         } */}
//                         {/* <Route path="/*" element={<Navigate to={routes[0].to} replace />} /> */}

//                     </Routes>
//                 </div>
//             </BrowserRouter>
//             </Suspense>
//         </>
//     )
// }


