import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";




export const LazyLayout = () => {
    return (
        <div>
            <h1>LazyLayout - Main Page</h1>
            <ul>
                <li>
                    <NavLink to="lazyload1"  > Lazy1</NavLink>
                </li>
                <li>
                    <NavLink to="lazyload2"  > Lazy2</NavLink>
                </li>
                <li>
                    <NavLink to="lazyload3"  > Lazy2</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="lazyload1" element={<LazyPage1 />} />
                <Route path="lazyload2" element={<LazyPage2 />} />
                <Route path="lazyload3" element={<LazyPage3 />} />
                
                <Route path="*" element={ <Navigate replace={true} to="lazyload1"  /> } />
                {/* <Route path="*" element={<Navigate replace={true} to="/lazyload1"  />} /> */}
            </Routes>
        </div>
    )
}


export default LazyLayout;