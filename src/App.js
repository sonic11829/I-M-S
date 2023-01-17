import { useState, useEffect } from 'react'
import Auth from './components/Auth/Auth'
import CreateItem from './components/CreateItem/CreateItem'
import ItemList from './components/ItemList/ItemList'

export default function App () {

  const handleChangeAuth = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  const handleChange = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value })
  }
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    name: ''
  })
  const [item, setItem] = useState({
    name: '',
    quantity: 0
  })
  const [items, setItems] = useState([])

  const [token, setToken] = useState('')
  const login = async () => {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      })
      const tokenResponse = await response.json()
      setToken(tokenResponse)
      localStorage.setItem('token', JSON.stringify(tokenResponse))
    } catch (error) {
      console.error(error)
    } finally {
      window.location.reload()
    }
  }
  const signUp = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...credentials })
      })
      const tokenResponse = await response.json()
      setToken(tokenResponse)
      localStorage.setItem('token', JSON.stringify(tokenResponse))
    } catch (error) {
      console.error(error)
    } finally {
      window.location.reload()
    }
  }
  const createItem = async () => {
    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ ...item })
      })
      const data = await response.json()
      setItems([data, ...items])
    } catch (error) {
      console.error(error)
    } finally {
      setItem({
        name: '',
        quantity: 0
      })
    }
  }
  const listItemsByUser = async () => {
    try {
      const response = await fetch('/api/users/items', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      })
      const data = await response.json()
      setItems(data)
    } catch (error) {
      console.error(error)
    }
  }
  const deleteItem = async (id) => {
    try {
      const response = await fetch(`/api/items/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const data = await response.json()
      const itemsCopy = [...items]
      const index = itemsCopy.findIndex(item => id === item._id)
      itemsCopy.splice(index, 1)
      setItems(itemsCopy)
    } catch (error) {
      console.error(error)
    }
  }
  const updateItem = async (id, updatedData) => {
    try {
      const response = await fetch(`/api/items/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(updatedData)
      })
      const data = await response.json()
      const itemsCopy = [...items]
      const index = itemsCopy.findIndex(item => id === item._id)
      itemsCopy[index] = { ...itemsCopy[index], ...updatedData }
      setItems(itemsCopy)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const tokenData = localStorage.getItem('token')
    if (tokenData && tokenData !== 'null' && tokenData !== 'undefined') {
      listItemsByUser()
    }
  }, [token])

  useEffect(() => {
    const tokenData = localStorage.getItem('token')
    if (tokenData && tokenData !== 'null' && tokenData !== 'undefined') {
      setToken(JSON.parse(tokenData))
    }
  }, [])

  return (
    <>
      {
        token?
        <button onClick={() => {
          localStorage.removeItem('token')
          window.location.reload()
        }}>
          Logout
        </button>:
        ''
      }
    
      <Auth
        login={login}
        credentials={credentials}
        handleChangeAuth={handleChangeAuth}
        signUp={signUp}
        setToken={setToken}
        token={token}
      />
      <CreateItem
        createItem={createItem}
        item={item}
        handleChange={handleChange}
      />
      <ItemList
        items={items}
        deleteItem={deleteItem}
        updateItem={updateItem}
      />
    </>
  )
}