import Card from "./Card";

export default function Contact(){
    return(
        <section id="contact"
        className="my-40 align-center max-w-5xl mx-auto p-3">
            <h2 className="text-5xl font-bold text-indigo-500 text-center">
                Contact
            </h2>
            <div className="flex gap-5 justify-center 
                        my-10">

                <Card title="LinkedIn" 
                    description="View my education and experience."
                    action="Let's Connect"
                    url="https://www.linkedin.com/in/john-m-hoyt"
                    />
                
                <Card title="GitHub" 
                    description="See what I'm currently working on."
                    action="View Profile"
                    url="https://github.com/JohnMHoyt24"
                    />

                <Card title="Email" 
                    description="Feel free to send me an email for new, exciting,
                    learning opportunities"
                    action="View Profile"
                    url="mailto:Jmhoyt6355@gmail.com"
                    />
                
            </div>
        </section>
    );
}