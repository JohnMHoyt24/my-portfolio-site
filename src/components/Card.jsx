export default function Card({ title, description, action, url }) {

    const handleClick = () => {
        window.location.href = url;
    };

    return(
        <div className="border border-gray-500 rounded px-4 py-2 
        text-gray-700 hover:bg-gray-200">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div>
                <p>{description}</p>
            </div>
            <button onClick={handleClick}>{action}</button>
        </div>
    );
}
