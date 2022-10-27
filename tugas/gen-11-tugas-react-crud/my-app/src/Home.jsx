import React, { Fragment} from 'react';
import TableList from './Components/TableList';
import Form from './Components/Form';
import { useStateContext } from './Contexts/ContextsProvider';

const Home = () => {
    const {form, setForm} = useStateContext();
    return (
        <Fragment>
            <div className ="w-full h-10 bg-gray-200 relative" >
            </div>
            <div className="px-28 mt-10">
                <button onClick={() => setForm(true)}  className="p-2 px-5 bg-purple-700 text-white rounded-full">Tambahkan Data</button>
                <TableList/>
            </div>
            {form ? <Form/> : null}
        </Fragment>
    )
}

export default Home