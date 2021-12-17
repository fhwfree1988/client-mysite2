import {useState} from "react";
import "./js/doJS.js";

const ColorPicker = () => {

    const[colorNum,setColorNum] = useState(0);

    return(
        <div>
            <p>Attached to DOMElement and using callbacks to live preview the color and adding animation.</p>
            <p>
                <div id="colorSelector"><div></div></div>
                {/*style="background-color: #0000ff"*/}
                ColorPickerFunc.PickColor();
            </p>
        </div>
    )
}

export default ColorPicker;