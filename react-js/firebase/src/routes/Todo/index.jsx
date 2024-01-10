import AddTodo from '../../components/ui/AddTodo'
import React from 'react'
import Todos from '../../components/ui/Todos'

const index = () => {
    return (
        <>

            <div className="flex justify-center ">

                <AddTodo />
                <Todos />

            </div>
        </>
    )
}

export default index;