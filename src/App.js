import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
class App extends Component{
    state = {
        characters:[
            
            {name: 'Prateek Gupta',
            job: 'SE 1 - PayPal'
            },
            {name: 'Tushar Bhatia',
            job: 'Intern - UBS'
            },
            {name:'Hardik Mehta',
            job:'Intern - Nutanix'
            }
        ]
    }
    removeCharacter = (index) => {
        const {characters} = this.state
        this.setState({
            characters: characters.filter((character,i)=>{
                return i!==index
            }),
        })
    }
    handleSubmit = (character) => {
        this.setState({
            characters: [...this.state.characters,character]
        })
    }
    render(){
        
        const {characters} = this.state
        return(
            // <div className="App">
            // <h1>Hello World!</h1>
            // </div>
         
         <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
            //using the curly brackets for JS usage
            //chracterData : to add the properties
        )
    }
    }
export default App