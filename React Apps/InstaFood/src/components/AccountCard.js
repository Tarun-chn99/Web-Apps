
const AccountCard = () => {
  return (
    <div title='sign in/up' className="p-8 shadow-lg rounded-xl bg-gray-400">
        <h3 className="my-2 text-xl font-bold">Account</h3>
        <p classname='my-2 text-sm text-gray-400 font-bold'>To place your order now, log in to your existing account or sign up.</p>
        <div className='inline-block text-center rounded-lg w-48 mr-2 px-10 py-4 borde-none bg-slate-200 cursor-pointer outline-none hover:shadow-lg my-8'>
            <span className="block text-gray-500 mx-auto text-sm font-bold">LOG IN</span>
        </div>
        <div className='inline-block text-center rounded-lg w-48 mr-2 px-10 py-4 border-none bg-slate-800 cursor-pointer outline-none hover:shadow-lg my-8'>
            <span className="block text-white mx-auto text-sm font-bold">SIGN UP</span>
        </div>
    </div>
  )
}

export default AccountCard
