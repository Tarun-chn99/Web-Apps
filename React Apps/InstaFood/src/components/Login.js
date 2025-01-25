import UserForm from "./UserForm"

const Login = ({ handleCloseLoginForm }) => {
  return (
    <>

      <div className="fixed top-0 left-0 bottom-0 right-0 animate-login-screen bg-[#282c3f] z-10 opacity-80"></div>

      <div title='login' className="fixed top-0 -right-[40rem] bottom-0 w-[35rem] bg-white p-4 z-20 animate-login-form">
        <UserForm handleCloseLoginForm={handleCloseLoginForm}/>
      </div>

    </>
  )
}

export default Login
