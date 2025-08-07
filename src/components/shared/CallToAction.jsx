const CallToAction = () => {
  return (
    <section className="relative py-16 px-6 md:px-12 bg-gradient-to-r from-teal-800 to-gray-900 overflow-hidden text-white text-center ">
      {/* Blurred BG Shape */}
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-teal-500 opacity-30 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Build Something Amazing Together
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Whether it’s a website, marketing campaign, or growth strategy — we’ve got your back.
        </p>
 
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="/contact"
            className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
          <a
            href="/services"
            className="border border-white text-white py-3 px-6 rounded-full hover:bg-white hover:text-gray-900 transition"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
