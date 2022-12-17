import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ScreenHeader from '../../components/ScreenHeader';
import { useCreateMutation } from '../../store/services/CategoryService';
import Wrapper from './Wrapper';



const CreateCategory = () => {
    const [catval, setCatval] = useState('')
    const [saveCategory, response] = useCreateMutation()
    console.log(response)
    const errors = response?.error?.data?.errors ? response?.error?.data?.errors : []
    const submitCategory = e => {
        e.preventDefault();
        saveCategory({ name: catval })
    }
    const navigate = useNavigate()
    useEffect(() => {
        if (response?.isSuccess) {
            navigate('/dashboard/categories')
        }
    }, [response?.isSuccess])
    return (
        <Wrapper>
            <ScreenHeader>
                <Link to='/dashboard/categories' className='btn-indigo'>Categories list<i className="bi bi-plus"></i></Link>
            </ScreenHeader>
            <form className="w-full md:w-8/12" onSubmit={submitCategory}>
                <h3 className='text-lg capitalize mb-3'>create category</h3>
                <div>
                    <input type='text' name='' className='form-control' placeholder='Category Name.....' value={catval} onChange={(e) => setCatval(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <input type='submit' value={response.isLoading ? 'loading....' : 'create category'} className='btn-blue' />
                </div>
            </form>
        </Wrapper>

    )
}


export default CreateCategory