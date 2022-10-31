import React, { Fragment } from 'react'

const List = (props) => {
    return (
        <Fragment>
            <div className='w-96 p-10 bg-gray-200 rounded-lg '>
                <h1 className="text-lg font-semibold">{props.judul}</h1>
                <p>Terbit : {props.terbit}</p>
                <p className="text-justify text-sm mt-3">{props.konten}</p>
            </div>
        </Fragment>
    )
}

export default List;