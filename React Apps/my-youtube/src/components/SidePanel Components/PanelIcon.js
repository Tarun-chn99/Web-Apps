import {SVG_LINK} from '../../utils/constants'

const PanelIcon = ({path}) => {
  return (
        <svg xmlns={SVG_LINK}>
            <path d={path}></path>
        </svg>
  )
}

export default PanelIcon
