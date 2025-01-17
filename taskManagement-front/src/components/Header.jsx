export default function Header({title, description}){
    return(
        <>
        <div className="header">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        </>
    )
}