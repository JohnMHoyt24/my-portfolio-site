export default function Hero() {
    return (
      <section
        id="hero"
        className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                   justify-center items-center align-center mt-40 
                   mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
        <div className="fade-in-text flex-1 flex flex-col justify-center items-center gap-5">
          <div>
            <h4 className="text-center text-xl font-bold">
                Hi and welcome to
            </h4>
            <h2 className="text-center text-indigo-500 text-5xl font-bold">
              My Portfolio Website
            </h2>
          </div>
          <p className="text-center">
            Let me make your dream website come to life!
          </p>
        </div>
{    /*    <div className="flex-1">
          <img src="https://www.svgrepo.com/show/331488/typing-on-laptop.svg"
               alt="Hello.svg"
               className="w-full h-full bg-cover"/>
    </div>*/}
      </section>
    );
  }