import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="w-full bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-5">
        
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
              Simplify Your Billing with{" "}
              <span className="text-[#0000ff]">Smart Solutions</span>
            </h1>

            <p className="mt-4 text-gray-600 text-base md:text-lg">
              Manage invoices, track payments, and grow your business with our
              easy-to-use billing system. Built for speed, simplicity, and
              efficiency.
            </p>

            <div className="mt-6">
              <Button text="Get Started" onClick={() => console.log("Start")} />
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
              alt="hero"
              className="w-full max-w-md md:max-w-lg rounded-xl shadow-md object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;