import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div id="about">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse xs:mx-20 sm:mx-20">

          {/* image section */}

          <img src="/pp.jpg" className="max-w-sm rounded-lg shadow-2xl mb-6" />

          {/* text section */}

          <div className="text-center sm:text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Hi, I am <br />{" "}
              <span className="text-orange-800">Rashedul Hasan</span>
            </h1>
            <h3 className="text-4xl mt-4 font-bold">
              I am a
              <span className="ml-2 text-orange-400 text-4xl">
                <Typewriter
                  words={[
                    "React Developer",
                    "Frontend Enthusiast",
                    "Problem Solver",
                    "Web Craftsman",
                    "Pixel Perfectionist",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </span>
            </h3>
            <p className="mt-4 text-xl">
              I am a full-stack developer with over 2 years of experience in
              building scalable web applications. Skilled in both front-end and
              back-end development, I specialize in the MERN stack and other
              modern technologies to create seamless user experiences and
              efficient solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
