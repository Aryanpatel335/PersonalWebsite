import React from "react";
// import ap from "../../resources/ap.jpeg";

const About = () => {
  // const { ref, inView } = useInView({
  //   threshold: 0.5,
  //   triggerOnce: true,
  //   rootMargin: "-100px 0px",
  // });

  return (
    <div>
      <div id="about" className="max-w-2xl mx-auto p-10 text-white">
        <h1 className="text-center text-4xl font-bold mb-10">about</h1>
        {/* If you have a profile image, uncomment the img tag and add your source */}
        {/* <img
          src={ap}
          alt="Profile"
          className="w-40 h-40 rounded-full block mx-auto my-5"
        /> */}
        <p className="text-justify leading-relaxed mb-4">
          Hey there! I'm <strong className="text-green">Aryan Patel</strong>, a
          budding Software Engineer with a knack for solving problems through
          code. Currently on my journey at{" "}
          <strong className="text-green">McMaster University</strong>, I'm
          weaving through the intricacies of software development, with a keen
          eye on fintech innovations.
        </p>
        <p className="text-justify leading-relaxed mb-4">
          With hands-on experience in{" "}
          <strong className="text-green">
            Java, JavaScript, Python, and React
          </strong>
          , I'm crafting solutions from front to back, exploring the vast realms
          of web and backend development, and more. When not coding, you'll
          catch me at the gym or strategizing my next move in the stock market.
        </p>
        <p className="text-justify leading-relaxed">
          Driven by curiosity and the thrill of creation, I'm on a quest to make
          an impact, one line of code at a time.
        </p>
      </div>
    </div>
  );
};

export default About;
