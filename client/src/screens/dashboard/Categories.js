import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ScreenHeader from '../../components/ScreenHeader';
import { clearMessage } from '../../store/reducers/globalReducer';
import Wrapper from './Wrapper';


const Categories = () => {
    const dispatch = useDispatch()
    const { success } = useSelector(state => state.globalReducer)
    useEffect(() => {
        return () => {
            dispatch(clearMessage())
        }
    }, [])

    return (
        <Wrapper>
            <ScreenHeader>
                <Link to='/dashboard/create-category' className='btn-indigo'>Add Categories</Link>
            </ScreenHeader>
            {success && <div className='alert-success'>{success}</div>}

            hell ow fnlnj iewij bivbk nishant janfdivuvbjvbghiihbbk
        </Wrapper>

    )
}


export default Categories