export default function Card(props) {
    return(
        <div>
            <h1>{props.title}</h1>
            <div>
                <p>{props.description}</p>
            </div>
            <button>{props.action}</button>
        </div>
    );
}
