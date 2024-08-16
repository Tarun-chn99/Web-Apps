// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import Button from "./Button"

const ButtonList = () => {
  
  let activeFilterButton = useSelector(store => store.app.activeFilterButton);
  if(!activeFilterButton) activeFilterButton = 0;

  const buttonList = ['All','Music','Thrillers','Movie','Tamil cinema','History','Live','Thoughts','Wealth','Self Confidence','Entrepreurship','Sports','Cricket','NewToYou']
  
  return (
    <div className="p-4 w-full overflow-auto">
      {
        buttonList.map((name,index) => <Button name={name} key={index} index={index} isActive={(activeFilterButton === index ? true : false)}/>)
      }
    </div>
  )
}

export default ButtonList
