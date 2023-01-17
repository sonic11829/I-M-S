import styles from './SignUp.module.scss'

export default function SignUp ({
    credentials,
    signUp,
    handleChangeAuth
  }) {
    return (
      <>
        <h2 className={styles.h2}>SignUp & Start Managing Your Items Inventory Today!</h2>
        <form className={styles.form} onSubmit={(e) => {
          e.preventDefault()
          signUp()
        }}
        >
          <input type='text' value={credentials.email} name='email' onChange={handleChangeAuth} placeholder='Email' />
          <input type='text' value={credentials.name} name='name' onChange={handleChangeAuth} placeholder='Name' />
          <input type='password' value={credentials.password} name='password' onChange={handleChangeAuth} placeholder='Password' />
          <input className={styles.submit} type='submit' value='Sign Up as New User' />
        </form>
      </>
    )
  }
  