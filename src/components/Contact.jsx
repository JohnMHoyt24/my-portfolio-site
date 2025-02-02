export default function Contact(){
    return(
        <section id="contact"
        className="my-40 align-center max-w-5xl mx-auto p-3">
            <h2 className="text-5xl font-bold text-emerald-500 text-center">
                Contact
            </h2>
            <div className="flex gap-5 justify-center 
                        my-10">
                <a rel="noreferrer"
                    target="_blank"
                    className="text-center hover:underline"
                    href="mailto:Jmhoyt6355@gmail.com">
                    Send me an email to: Jmhoyt6355@gmail.com
                </a>
                <a rel="noreferrer"
                    target="_blank"
                    className="text-center hover:underline"
                    href="https://twitter.com/geeksforgeeks">
                    Connect with me on LinkedIn!
                    <span className="font-bold">
                       
                    </span>
                </a>

                <a rel="noreferrer"
                    target="_blank"
                    className="text-center hover:underline"
                    href="https://github.com/JohnMHoyt24">
                    View my GitHub Profile
                </a>
            </div>
        </section>
    );
}