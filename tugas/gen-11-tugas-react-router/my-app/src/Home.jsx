import React, { Fragment} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Tambah from './pages/Tambah';
import Detail from './pages/Detail';

const Home = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing/>}/>
                    <Route path="/tambah" element={<Tambah/>}/>
                    <Route path="/edit/:id" element={<Tambah/>}/>
                    <Route path="/detail/:id" element={<Detail/>}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}

export default Home