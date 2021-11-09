
function Keypad() {
    function handleChange() {console.log('Entering password...')}
    
    return (
        <>
            <div>Keypad</div>
            <input type="password" onChange={handleChange} />
        </>
    )
};

export default Keypad;