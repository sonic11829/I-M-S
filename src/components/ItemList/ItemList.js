import Item from '../Item/Item'
import { useState, useEffect } from 'react'

export default function ItemList(props) {
    const [itemArray, setItemArray] = useState([])
    useEffect(() => {
        // create items
        const itemArray = []
        props.items.forEach((item) => {
            itemArray.push(item)
        })
        setItemArray([...itemArray])
      }, [props.items])
    
    return (
        <>
            <h2>Items</h2>
            {itemArray.length ? (
                <ul>
                    {itemArray.map((el) => {
                        return (
                            <Item buttonFn={props.deleteItem} key={el._id} id={el._id} name={el.name} buttonText="X"/>
                        )
                    })}
                </ul>
            ) : 'List your Items Now!'}
        </>
    )
}