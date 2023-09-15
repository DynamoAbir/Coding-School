import React from "react";

const FAQ = () => {
  return (
    <div className="h-96">
      <div className="collapse  collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          What is Coding School?
        </div>
        <div className="collapse-content">
          <p>
            Well, Coding School is an innovative new form of short-term,
            intensive, and often immersive education designed to provide
            aspiring tech enthusiasts and professionals the skills they need to
            start careers in software engineering and other tech fields.
            Learning to code is an integral part of most courses. At the end of
            your coding program, you’ll be proficient in essential programming
            languages and frameworks. Check out this guide to learn how to and
            start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How Long Does It Take to Learn Web Development?
        </div>
        <div className="collapse-content">
          <p>
            Pursuing a college degree in web development, computer science, or
            computer programming takes 8-10 months, depending on whether you get
            an associate degree or a bachelor's degree. This is the longest path
            to becoming a web developer.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Is Artificial Intelligence good course?
        </div>
        <div className="collapse-content">
          <p>
            Becoming an expert in AI will enable you to challenge current ways
            of working and change the way you perceive most things. Highlighting
            yourself as someone who strives for positive change, as well as an
            eagerness to learn the latest technologies could take you a long way
            in your career.The goal is to create computer intelligence
            programmes that can handle real-time problems and help organizations
            and everyday people achieve their goals. Machine games, speech
            recognition, language detection, computer vision, expert systems,
            robotics, and other fields have potential. However, we actually
            recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as
            there is no technical reason stopping you from using the best of two
            worlds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
