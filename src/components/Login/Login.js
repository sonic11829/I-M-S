import styles from './Login.module.scss'

export default function Login ({
  login,
  credentials,
  handleChangeAuth
}) {
  return (
    <>
      <h2 className={styles.h2}>Welcome Back! Login Now!</h2>
      <form className={styles.form} onSubmit={(e) => {
        e.preventDefault()
        login()
      }}
      >
        <input type='text' value={credentials.email} name='email' onChange={handleChangeAuth} placeholder='Email' />
        <input type='password' value={credentials.password} name='password' onChange={handleChangeAuth} placeholder='Password' />
        <input className={styles.submit} type='submit' value='Login as an Existing User' />
      </form>
    </>
  )
}

