
function ColorPicker(props){
    return(
    <div>
        <button onClick={() => props.sendFunctionToCall('Red')} >Red</button>
        <button onClick={() => props.sendFunctionToCall('Green')}>Green</button>
        <button onClick={() => props.sendFunctionToCall('Blue')}>Blue</button>
    </div>
    )
}

export default ColorPicker 


