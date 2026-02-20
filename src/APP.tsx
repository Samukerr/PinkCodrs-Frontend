import {Routes, Route} from "react-router-dom";
import ProductSearch from "../ProductList";
import ProductList from "../ProductList"

function App() {
    return(
        <Routes>
            <Route path="/search" element={<ProductSearch />} />
            <Route path="/list" element={<ProductList />} />
        </Routes>
    )
}

export App