import react from 'react'

class JokesList extends react.Component{
    constructor(props){
        super(props)
        this.state = {
            jokes:[]
        }
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/joke')
            .then(response => response.json())
            .then(data => this.setState({jokes:data}));
    }

    render(){
        return(
            <body className='joke-form'>
                Jokes List
                <div>
                    {this.state.jokes.map((jokeItem)=>(
                        <div>
                            {jokeItem.content}
                        </div>
                    ))}
                </div>
            </body>
        )
    }
}

export default JokesList