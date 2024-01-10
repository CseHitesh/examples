import React, { useState } from 'react'
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';

import { db } from '../../services/utils/firebase';
import { useDispatch } from 'react-redux'

// import { addTodo } from '../features/todo/todoSlice'


function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()


    const addData = async () => {
        try {

            const dbCollection = collection(db, input);

            const dataToAdd = {
                item: "newItem",
            };
            await addDoc(dbCollection, dataToAdd);

            console.log('Data added successfully');
        } catch (error) {
            console.error('Error adding data:', error);
        }
    };

    const fetchDataForSingleUser = async (userId) => {
        try {
            // Specify the document ID (userId) of the user you want to fetch
            const userDoc = doc(db, 'todo', userId);
            const docSnapshot = await getDoc(userDoc);

            if (docSnapshot.exists()) {
                // Document exists, retrieve data
                const userData = { id: docSnapshot.id, ...docSnapshot.data() };

                console.log({ userData })
                // setData([userData]);
            } else {
                // Document doesn't exist for the specified user ID
                // setData([]);
                console.log('User not found');
            }
        } catch (error) {
            console.error('Error fetching user data: ', error);
        }
    };



    const addTodoHandler = async (e) => {

        e.preventDefault()

        console.log("adding")

        // await addData()

        await fetchDataForSingleUser("b1Akln1H38WP68fstFlC38NptWs1")



        // dispatch(addTodo(input))
        // setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo