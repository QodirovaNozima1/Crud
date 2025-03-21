import { v4 as uuidv4 } from 'uuid'
import { FaRegCircleUser } from "react-icons/fa6";

import React, { useState } from 'react'
import { useUser } from '../../hooks/useUsers'
import { User } from '../../types'
const Users: React.FC = () => {
    const [editingUser, setEditingUser] = useState<User | null>(null)



	const { users, addUser, deleteUser, editUser } = useUser()
	

	const [newUser, setNewUser] = useState<User>({
		id: uuidv4(),
		firstName: '',
		lastName: '',
		profession: '',
		age: 0,
		gender: 'male',
	})

	const handleEditClick = (user: User) => {
		setEditingUser(user)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (editingUser) {
			editUser(editingUser.id, editingUser)
			setEditingUser(null)
		} else {
			addUser({ ...newUser, id: uuidv4() })
		}

		setNewUser({
			id: uuidv4(),
			firstName: '',
			lastName: '',
			profession: '',
			age: 0,
			gender: 'male',
		})
	}

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
		field: keyof User
	) => {
		let value = e.target.value


		if (editingUser) {
			setEditingUser({ ...editingUser, [field]: value })
		} else {
			setNewUser({ ...newUser, [field]: value })
		}
	}

	return (
		<div className='min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex'>
			<div className='w-1/4 bg-white p-8 rounded-r-2xl shadow-2xl h-screen flex flex-col justify-center'>
				<h3 className='text-2xl font-bold text-gray-800 mb-8 text-center'>
					{editingUser ? 'Edit User' : 'Users'}
				</h3>
				<form onSubmit={handleSubmit} className='space-y-6 flex flex-col items-center'>
					<input
						type='text'
						placeholder='First Name'
						value={editingUser ? editingUser.firstName : newUser.firstName}
						onChange={e => handleInputChange(e, 'firstName')}
						className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500'
					/>
					<input
						type='text'
						placeholder='Last Name'
						value={editingUser ? editingUser.lastName : newUser.lastName}
						onChange={e => handleInputChange(e, 'lastName')}
						className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500'
					/>
					<input
						type='text'
						placeholder='Profession'
						value={editingUser ? editingUser.profession : newUser.profession}
						onChange={e => handleInputChange(e, 'profession')}
						className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500'
					/>
					<input
						type='number'
						placeholder='Age'
						value={editingUser ? editingUser.age : newUser.age}
						onChange={e => handleInputChange(e, 'age')}
						className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500'
					/>
					<select
						value={editingUser ? editingUser.gender : newUser.gender}
						onChange={e => handleInputChange(e, 'gender')}
						className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500'
					>
						<option value='other'>Other</option>
						<option value='male'>Male</option>
						<option value='female'>Female</option>
					</select>
					<button
						type='submit'
						className='w-full py-3 bg-linear-to-r from-violet-500 to-violet-300 text-white font-bold rounded-lg hover:bg-blue-700 transition'
					>
						{editingUser ? 'Save Changes' : 'Add User'}
					</button>
                    <button onClick={()=>{window.location.href = "/"}} className='border-[2px] border-t-violet-300 border-b-violet-500 rounded-lg p-2 border-l-violet-600 w-[100px] border-r-violet-700 hover:bg-linear-to-r from-violet-500 to-violet-300 hover:ease-in' >Go Home</button>
				</form>
			</div>

			<div className='w-3/4 p-12'>
				<h2 className='text-3xl font-bold text-gray-900 mb-8'>User List</h2>
				<div className='flex flex-wrap gap-6'>
					{users.map(user => (
						<div
							key={user.id}
							className='flex flex-col items-center justify-between w-[300px] bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow'
						>
							<div className='flex flex-col gap-1 items-center p-6'>
							<p className='text-4xl'><FaRegCircleUser/></p>
								<h4 className='text-xl font-bold text-gray-900'>
									{user.firstName} {user.lastName}
								</h4>
								<p className='text-sm text-gray-600'>
									{user.profession}
								</p>
								<p className='text-sm text-gray-600'>
									 {user.age} years old
								</p>
							</div>
							<div className='flex w-full bg-slate-300 p-8 justify-between'>
								<button
									onClick={() => deleteUser(user.id)}
									className='px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition'
								>
									Delete
								</button>
								<button
									onClick={() => handleEditClick(user)}
									className='px-5 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition'
								>
									Edit
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Users