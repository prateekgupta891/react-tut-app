import React, {Component} from 'react'

const Table = (props) => {
    const {characterData, removeCharacter} = props
    return (
        <table>
            <TableHeader/>
            <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
        </table>
    )
}

//no more need to define as a class component
// class Table extends Component{
//     render(){
//         const {characterData} = this.props
//         return (
//             <table>
//                 <TableHeader/>
//               <TableBody characterData = {characterData}/>
//             </table>
//         )
//     }
// }
//Above is the class component
// Below are the simple component 

const TableHeader = ()=>{
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Remove</th>
        </tr>
        </thead>
    )
}
const TableBody = (props) => {
    const rows = props.characterData.map((row, index) =>
    {return (
        <tr key = {index}> 
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td>
                <button onClick = {()=> props.removeCharacter(index)}>Delete</button>
            </td>
        </tr>
        
    )}
    )
    return <tbody>{rows}</tbody>
    //using the key to help identify each list item.
}
// const TableBody = ()=>{
//     return (
//         <tbody>
//         <tr>
//             <td>Pratee Gupta</td>
//             <td>SE 1 - PayPal</td>
//         </tr>
//         <tr>
//             <td>Tushar Bhatia</td>
//             <td>Intern - UBS</td>
//         </tr>
//         <tr>
//             <td>Hardik Mehta</td>
//             <td>Intern - Nutanix</td>
//         </tr>
//     </tbody>
//     )
// }
export default Table