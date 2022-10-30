import React, { Fragment } from 'react'
import Form from '../Components/Form';
import Navbar from '../Components/Navbar/Navbar';

const Tambah = () => {
    return (
        <Fragment>
            <Navbar/>
            <div className='px-32 mt-10 pb-10 justify-center flex justify-center'>
                <Form/>
            </div>
        </Fragment>
    )
}

export default Tambah;