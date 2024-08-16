import { panelMenus } from '../utils/constants';
import SubMenu from './SubMenu'
import { useSelector } from 'react-redux'

const SidePanel = () => {

    const isSidePanelOpen = useSelector(store => store.app.isSidePanelOpen);

    return (
        isSidePanelOpen && <div className='w-2/12 h-full bg-gray-200 overflow-y-auto custom-scrollbar'>
            {
                panelMenus.map((element,index) => <SubMenu key={index} heading={element.heading} menuList={element.links}/>)
            }
        </div>
    )
}

export default SidePanel;