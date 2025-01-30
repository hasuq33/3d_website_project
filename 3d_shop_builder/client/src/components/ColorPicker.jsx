import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import store from "../store";
import state from "../store";

const ColorPicker = () =>{
    const snap = useSnapshot(store);
    
    return(
        <div className="absolute left-full ml-3">
            <SketchPicker color={snap.color} disableAlpha onChange={(color) => state.color = color.hex} 
                presetColors={['#000000','#ffffff','#ff0000','#00ff00','#0000ff','#ffff00','#ff00ff','#00ffff','#7098DA','#5f123d','#c19277','#2CCCE4']}
                />
        </div>
    )
}

export default ColorPicker;