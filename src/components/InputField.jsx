const InputField = ({ text, handleInput, handleAction }) => {
  return (
    <label>
        <input value={text} onChange={(e) => handleInput(e.target.value)}/>
        <button onClick={handleAction}>Add todo</button>
    </label>
  )
}

export default InputField