import styles from './CreateItem.module.scss'
export default function CreateItem ({
  createItem,
  item,
  handleChange
}) {
  return (
    <>
      <h2 className={styles.h2}>Create An Item</h2>
      <div className={styles.container}>
        <form 
          className={styles.form}
          onSubmit={(e) => {
          e.preventDefault()
          createItem()
        }}
        >
          <div className={styles.div}>
            <label>Name<input type='text' value={item.name} name='name' onChange={handleChange} placeholder='Name' /></label>
            <label>Quantity<input type='number' value={item.quantity} min={0} name='quantity' onChange={handleChange} placeholder='Quantity' /></label>
            <input className={styles.button} type='submit' value='Create Item' />
          </div>
        </form>
      </div>
    </>
  )
}
