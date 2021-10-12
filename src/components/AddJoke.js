import react from 'react'

function AddJoke(props){

    const contentRef = react.useRef();

    function handleSubmit(event){

        const data = { 
            id: 0,
            content: contentRef.current.value
        };
    
        fetch('http://127.0.0.1:8000/joke', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    return(
        <form className='joke-form' onSubmit={handleSubmit}>
            <label>
                <div>Add Joke:</div>
                <textarea ref={contentRef}>
                    Add Joke...
                </textarea>
            </label>
            <input type='submit' value='Submit Joke'/>
        </form>
    )
}

export default AddJoke