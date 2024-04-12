
const Round = (props)=>{
    const {number, children} = props
    return (
        <div>
            <p className="circle">{number}</p>
            <p >{children}</p>
        </div>
    )
}

export default Round;
// const Person = (props) =>{

//     const {name, age, children} = props

//     return (
//         <div className={styles.person}>
//            <h1>{name}</h1> 
//            <p>Age: {age}</p> 
//            <p>{children}</p> 
//         </div>
//     )

// }