import { useSnapshot } from "valtio";
import state from "../store";

const Tab = ({tab , isFilterTab , isActiveTab , handleClick }) => {

  const snap = useSnapshot(state);
  const activeStyles = isFilterTab && isActiveTab ? { backgroundColor: snap.color, opacity: 0.5} : { backgroundColor: 'transparent', opacity:1}
  return (
    <div 
      key={tab.name} className={`tab-name ${isFilterTab ? 'rounded-full   glassmorhism flex items-center justify-center':'rounded-4'}`}
      onClick={handleClick} style={activeStyles}
      >
        <img src={tab.icon} alt={tab.name} className={`${isFilterTab ? 'p-2  w-12/12 h-1/12' : 'w-11/12 h-11/12 object-contain'} cursor-pointer`}/>
      </div>
  )
}

export default Tab;