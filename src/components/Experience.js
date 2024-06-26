
import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-centerr justify-between md:w-[80%]'>
        <LiIcon reference={ref} />

        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
                target="_blank"
                className='text-primary dark:text-primaryDark capitalize'
            >@{company}
         
            </a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span >
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}
const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>
        <div
          ref={ref}
          className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-7 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]"
          />

          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position=" Research Fellowship"
              company="KIIT University"
              companyLink="www.google.com"
              time="2021-Present"
              address=" Bhubaneswar, India"
              work="played an instrumental role in a research project focused on Cybersecurity and Machine Learning. 
                        I actively participated in designing experiments, collecting and analyzing data, and interpreting results.
                        This collaborative effort resulted in a published paper titled 
Cybersecurity Imminent threats in Higher Education with its Solutions in Reputable 4th Doctoral Symposium on 
Intelligence Enabled Research 2022, showcasing our team's findings and innovative approach."
            />

            <Details
              position=" Junior Flutter Developer"
              company="Kenmark ITan"
              companyLink="www.google.com"
              time="May 2023-August 2023"
              address=" Bhubaneswar, India"
                        work="As a Junior Flutter Developer at KenMark ITan Solution Company, I had the exciting opportunity 
              to contribute to the development of a cutting-edge medical instrument supplying application.
               Working within a dynamic team of developers, designers, and product managers, 
               I played a pivotal role in bringing innovative solutions to the healthcare sector."
            />
            {/* <Details
              position=" Software Engineer"
              company="Google"
              companyLink="www.google.com"
              time="2022-Present"
              address=" Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
            /> */}
            <Details
              position=" Cybersecurity Intern"
              company="MasterCard"
              companyLink="www.google.com"
              time="2023-September"
              address=" Remote(Virtual), Online"
              work="Worked on a team responsible for developing new features for Mastercard's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
            />
            <Details
              position=" CyberTechn Intern"
              company="Deloitte"
              companyLink="www.google.com"
              time="2023-March"
              address=" Remote(Virtual), Online"
              work="Worked on a team responsible for developing new features for Delotte's 
Analysing Threats and giving response."
            />
          </ul>
        </div>
      </div>
    );
}
export default Experience