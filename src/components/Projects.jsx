// Projects.js
export default function Projects() {
    return (
        <section id="projects"
                 className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
            <h2 className="text-5xl text-indigo-500 font-bold text-center">
                My Projects
            </h2>
            <div className="p-10 bg-indigo-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href=
"https://www.geeksforgeeks.org/progress-tracker-using-react-and-local-storage/"
                        className="w-full h-full">

                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
 
                </div>
            </div>
            <div className="p-10 bg-indigo-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href=
"https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/"
                       className="w-full h-full">
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">

                </div>
            </div>
        </section>
    );
}