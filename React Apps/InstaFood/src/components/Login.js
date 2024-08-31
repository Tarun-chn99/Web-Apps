import UserForm from "./UserForm"

const Login = ({ handleCloseLoginForm }) => {
  return (
    <>
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-[#282c3f] opacity-75 z-10 transition-all duration-500"></div>
    <div title='login' className="fixed top-0 right-0 bottom-0 w-[40rem] bg-white p-4 z-20 transition-all duration-500">

      <button className="p-4 my-2 bg-slate-200 rounded-lg outline-none hover:bg-slate-500" onClick={handleCloseLoginForm}>X</button>
      <UserForm/>

    </div>
    </>
  )
}

export default Login
