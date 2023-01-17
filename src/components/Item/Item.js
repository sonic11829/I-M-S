import { useRef, useState } from 'react'
import styles from './Item.module.scss'

export default function Item ({
  item,
  updateItem,
  deleteItem
}) {
  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef(null)
  return (
    <>
      <li className={styles.li}>
        <h4 onClick={() => setShowInput(!showInput)}>{item.name}</h4>
        <input
          ref={inputRef}
          style={{ display: showInput ? 'block' : 'none' }}
          type='text'
          name="name"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const name = inputRef.current.value
              updateItem(item._id, { name })
              setShowInput(false)
            }
          }}
          defaultValue={item.name}
        />
        <div className={styles.quantity}>
          <button onClick={() => updateItem(item.quantity = item.quantity - 1)}>-</button>&nbsp;
          <h4>Quantity: {item.quantity}</h4>&nbsp;
          <button onClick={() => updateItem(item.quantity = item.quantity + 1)}>+</button>&nbsp;
        </div>
        <button
          onClick={() => deleteItem(item._id)}
        >
          Delete Me
        </button>
      </li>
    </>
  )
}