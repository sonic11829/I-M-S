import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import ItemList from '../../components/ItemList/ItemList'
import ItemInput from '../../components/ItemInput/ItemInput'
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import handleFetch from '../../utilities/handle-fetch'
import sendRequest from '../../utilities/send-request';

export default function App() {
  const [user, setUser ] = useState(getUser)
  const [items, setItems] = useState([])
  const [foundItem, setFoundItem] = useState(null)
  const [newItem, setNewItem] = useState({
    name: ''
  })

  useEffect(() => {
    getItems()
  }, [])

  useEffect(() => {
    getItems()
  }, [foundItem])

  // index
  const getItems = async() => {
    try {
      setItems(await sendRequest('/api/items', 'GET', false, ''))
    } catch (error) {console.error(error)}
  }

  // create
  const createItem = async() => {
    try {
      setFoundItem(await handleFetch('/api/items', 'POST', true, {...newItem}))
      setNewItem({
        name: ''
      })
    } catch (error) {console.error(error)}
  }

  // update
  const updateItem = async(id) => {
    try {
      setFoundItem(await sendRequest(`/api/items/${id}`, 'PUT', true, {completed: true}))
    } catch (error) {console.error(error)}
  }

  // delete
  const deleteItem = async(id) => {
    try {
      setFoundItem(await sendRequest(`/api/items/${id}`, 'DELETE', false, ''))
    } catch (error) {console.error(error)}
  }
  
  const handleChange = (event) => {
    setNewItem({...newItem, [event.target.name]: event.target.value})
  }
  
  return (
    <main className="App">
      {
        user ?
        <>
          <Routes>
            <Route path='/' element={<>
              <h1>Item Management System</h1>
              <ItemInput newItem={newItem} handleChange={handleChange} handleSubmit={createItem} />
              <ItemList items={items} updateItem={updateItem} deleteItem={deleteItem}  />
              <UserLogOut user={user} setUser={setUser} />
            </>} />
          </Routes>
        </>
         :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

