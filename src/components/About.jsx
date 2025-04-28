export default function About(){
    return (
        <section
            id="#about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 
                       align-center bg-orange-200 shadow-xl max-w-5xl mx-auto">
            <div className="flex-1">
            </div>
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                <div>
                    <h2 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 
                                    border-r-white pr-5 text-5xl text-indigo-500 font-bold text-center 
                                    text-5xl font-bold">
                        Hello, I'm John! {/*<span className="wave">👋</span>*/}
                    </h2>
                </div>
                <p>
                    I'm like that contractor who built your
                    house, but I build fun things on the web.
                </p>
                <p>
                    I am a passionate web developer who is both college-educated
                    and self-taught. Ever since taking a web development course in
                    college, I have been enthusiastic about creating websites and
                    web apps. This is my place to showcase my work and skills.
                    Make yourself a warm cup of coffee &#9749; or grab your favorite
                    drink &#129380; and take a look around.

                    If you're interested in my work, let's chat.
                    I'm always open to new opportunities!
                </p>
            </div>
        </section>
    );
}