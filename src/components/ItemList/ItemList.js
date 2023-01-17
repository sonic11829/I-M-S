import Item from '../Item/Item'

export default function ItemList ({
  items,
  updateItem,
  deleteItem
}) {
  return (
    <ul>
      {
                items.length
                  ? items.map(item => (
                    <Item
                      key={item._id}
                      item={item}
                      updateItem={updateItem}
                      deleteItem={deleteItem}
                    />
                  ))
                  : <>
                    <h2>No Items exist Yet. Start Adding Them!</h2>
                    </>
            }
    </ul>
  )
}
