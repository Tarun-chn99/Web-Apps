import { useSelector } from "react-redux"
import Button from "./Button"

const ButtonList = ({ buttonList}) => {
  
  let activeFilterButton = useSelector(store => store.app.activeFilterButton);
  if(!activeFilterButton) activeFilterButton = 0;
  
  return (
    <div className="p-4 w-full overflow-auto">
      {
        buttonList.map((name,index) => <Button name={name} key={index} index={index} isActive={(activeFilterButton === index ? true : false)}/>)
      }
    </div>
  )
}

export default ButtonList
