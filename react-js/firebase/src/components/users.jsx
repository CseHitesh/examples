import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from '../redux/slices/userSlice';

const Users = () => {

    const dispatch = useDispatch();

    const users = useSelector((state) => state.user?.data);

    useEffect(() => {

        const initialFetch = () => {

            dispatch(getUsers())

        }

        initialFetch()

    }, [])


    return (
        <div>Users

            {

                users?.map(user => {
                    return <h6 key={user.id}>
                        {user.name}
                    </h6>
                })

            }

        </div>
    )
}

export default Users