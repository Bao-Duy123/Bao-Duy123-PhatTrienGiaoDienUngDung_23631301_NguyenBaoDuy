import { useState } from "react";

function Form(type){
    var cssForm = 'form-style';
  const [name, setName] = useState({
    //object 
    name: '',
    email: '',
    age: ''
  });

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('A name was submitted: ' + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;