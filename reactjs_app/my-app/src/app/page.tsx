'use client'
import '@/app/globals.css'
import { useEffect, useState } from 'react'

interface UserProps {
  id: string,
  name: string,
  img: string,
  city: string,
  email: string
}

const home = () => {
  const [items, setUserList] = useState<UserProps[]>([])
  
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await fetch('https://www.apirequest.in/user/api')
        if (!res.ok) {
          throw new Error(`Error in fetching api: ${res.status}`)
        }
        const data = await res.json()
        console.log(data)
        setUserList(data)
      } catch (error) {
        alert(`Error in fetching data: ${error}`)
      }
    }
    fetchUserDetails()
    console.log(items)
  }, [])
  return (
    <div className=''>
        <h1 className='text-4xl underline'>NextJs Demo App</h1>
        {/* <Link href='/about'
         className='text-blue-500 underline'>About page</Link> */}
         <ul>
        {items.length >= 0 ? (
          items.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
            </li>
          ))
        ) : (
          <li>No users found.</li>
        )}
      </ul>
    </div>
  )
}

export default home