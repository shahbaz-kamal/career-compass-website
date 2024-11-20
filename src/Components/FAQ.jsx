import React from "react";
import SectionTitle from "./SectionTitle";

const FAQ = () => {
  return (
    <div>
      <header>
        <SectionTitle
          sectionTitle={"Frequently Asked Questions"}
        ></SectionTitle>
      </header>
      <section data-aos="fade-up">
        <div className="join join-vertical w-full border ">
          <div className="collapse collapse-arrow join-item border-color-primary-40 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg md:text-2xl font-medium">
              1. What is Career Compass?
            </div>
            <div className="collapse-content">
              <p className="text-lg md:text-xl">
                Career Compass is a comprehensive online platform designed to
                assist individuals in navigating their career paths with
                confidence and clarity. Whether you're just entering the
                workforce, looking to switch industries, or aiming to advance in
                your current role, Career Compass offers personalized tools and
                expert advice to support you every step of the way. Our platform
                provides a variety of career resources, including skills
                assessments, career advice, resume-building templates, job
                search strategies, and interview coaching. By helping you better
                understand your strengths, preferences, and goals, Career
                Compass enables you to make informed decisions and take
                meaningful action towards achieving your career aspirations. Our
                mission is to empower you with the knowledge and confidence
                needed to find fulfillment in your career journey.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-color-primary-40 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg md:text-2xl font-medium">
              2. How do I create an account on Career Compass?
            </div>
            <div className="collapse-content">
              <p className="text-lg md:text-xl">
                Creating an account on Career Compass is a quick and
                straightforward process that gives you access to a wide array of
                tools, resources, and personalized career guidance. To get
                started, simply click the "Log In" button located at the top of
                our homepage. You will be asked to provide some basic
                information, such as your full name, email address, and a secure
                password. Once registered, you'll receive a confirmation email
                to activate your account. After activation, you can log in to
                your account and begin exploring our career assessments,
                professional development courses, and job listings. In addition,
                you'll be able to customize your profile with your skills,
                experience, and career goals, allowing Career Compass to offer
                more relevant advice and resources tailored to your needs.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-color-primary-40 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg md:text-2xl font-medium">
              3. Can Career Compass help me with job search?
            </div>
            <div className="collapse-content">
              <p className="text-lg md:text-xl">
                Absolutely! Career Compass is designed to streamline your job
                search process, making it easier to find job opportunities that
                align with your skills and interests. Once you've created your
                profile, you can access our curated job listings, where you'll
                find opportunities that match your career aspirations. We
                aggregate job postings from top employers, giving you the
                ability to filter by location, industry, job type, and
                experience level. Additionally, Career Compass offers helpful
                resources like resume-building templates, job application tips,
                and customized job alerts that notify you of new openings in
                your field. Our platform also provides interview preparation
                tools, including common interview questions, best practices, and
                mock interview sessions to ensure you're fully prepared when
                it’s time to meet potential employers.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-color-primary-40 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg md:text-2xl font-medium">
              4. Is Career Compass only for people looking for new jobs?
            </div>
            <div className="collapse-content">
              <p className="text-lg md:text-xl">
                No, Career Compass is not just for job seekers — it's for anyone
                looking to grow and succeed in their professional journey.
                Whether you're at the beginning of your career, considering a
                career change, or looking to advance within your current role,
                Career Compass has a range of tools and resources for all stages
                of professional development. For individuals entering the
                workforce, we offer career exploration tools, internship
                opportunities, and tips for crafting a standout resume. If
                you're considering switching careers, we provide career
                transition resources to help you identify transferable skills,
                explore new fields, and navigate the job market in a different
                industry. For professionals aiming to advance in their current
                field, Career Compass offers leadership training, skill-building
                workshops, networking advice, and strategies for career
                progression. Regardless of your current situation, our platform
                is designed to support your career growth and help you achieve
                your professional goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
