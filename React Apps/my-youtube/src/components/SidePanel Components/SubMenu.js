import { Link } from "react-router-dom"

const SubMenu = ({menuList,heading}) => {
  
  return (
    <div className="px-4 py-2 border-b-4 border-gray-300">
        {heading && <h1 className="text-xl font-bold px-4  my-4">{heading}</h1>}
        <ul className="list-none  mb-0">
            {
                menuList.map((element)=>{
                    return <Link key={element} to='/'>
                              <li className="py-4 px-4 text-sm hover:bg-gray-500 cursor-pointer rounded-2xl" >
                              <span>{element}</span>
                              </li>
                            </Link>
                })
            }
            </ul>
    </div>
  )
}

export default SubMenu
