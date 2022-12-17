import React from 'react';
import { Link } from 'react-router-dom';
import ScreenHeader from '../../components/ScreenHeader';
import Wrapper from './Wrapper';



const CreateCategory = () => {
    return (
        <Wrapper>
            <ScreenHeader>
                <Link to='/dashboard/categories' className='btn-indigo'>Categories list<i className="bi bi-plus"></i></Link>
            </ScreenHeader>
            <form className="w-full md:w-8/12">
                <h3 className='text-lg capitalize mb-3'>create category</h3>
                <div>
                    <input type='text' name='' className='form-control' placeholder='Category Name.....' />
                </div>
                <div className='mb-3'>
                    <input type='submit' value='create category' className='btn-blue' />
                </div>
            </form>
        </Wrapper>

    )
}


export default CreateCategory