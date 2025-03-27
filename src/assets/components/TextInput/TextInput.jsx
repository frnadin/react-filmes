import './TextInput.css'

function TextInput({ onChange }) {
    return(
        <div className='container-input'>
            <input placeholder='Write your favorite movie...' className='input' type="text" onChange={(e) => onChange(e.target.value)}/>
        </div>
    );
}
export default TextInput;
