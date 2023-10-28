import React, { useRef } from 'react';
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useMotionValue } from 'framer-motion';
import project1 from "../../public/images/projects/qrcode.jpg"
import project2 from "../../public/images/projects/Agora.jpg"
import project3 from "../../public/images/projects/Blog.jpg"
import project4 from "../../public/images/projects/AIimage.jpg"
import project5 from "../../public/images/projects/pay.jpg"
import project6 from "../../public/images/projects/threads.jpg"
import project7 from "../../public/images/projects/file.jpg"
import project8 from "../../public/images/projects/url.jpg"
import project9 from "../../public/images/projects/open.jpg"
import project10 from "../../public/images/projects/meal.jpg"
import project11 from "../../public/images/projects/time.jpg"
import project12 from "../../public/images/projects/research.jpg"


import { GithubIcon } from '@/components/Icons'
import {motion} from "framer-motion"
import TransitionEffect from '@/components/TransitionEffect'


const MovingImg = ({ title, img, link }) => {

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
     imgRef.current.style.display = "inline-block";
     x.set(event.pageX);
     y.set(-10)
  }
  function handleMouseLeave(event) {
     imgRef.current.style.display = "none";
     x.set(0);
     y.set(0)
  }
  return (
      <Link href={link} target="_blank"
      
          onMouseMove={handleMouse}
          onMouseLeave={handleMouseLeave}
      
      >
          
          
          <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
          <FramerImage
              style={{ x: x, y: y }}
              initial={{ opacity: 0 }}
              whileInView={{opacity:1, transition:{duration:0.2}}}
              ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden' />

          </Link>
  )
}

const Article = ({ img, title, date, link }) => {
  return (
      <motion.li
          initial={{ y: 200 }}
          whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          viewport={{once: true}}
          className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark 
      first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
      sm:flex-col'>
          <MovingImg title={title} img={img} link={link} />
         
          <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
      </motion.li>
  )
}

const FramerImage = motion(Image);
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl
            xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            
            <Link href={link} target="_blank"
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
        
            
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                priority
                sizes="(max-width:768px) 100vw, 
                (max-width:1200px)50vw,
                50vw"
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'> <GithubIcon />
                    </Link>
                   

                </div>
            </div>
        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
            md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
               <Link href={link} target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{ scale: 1.05 }}
                    transition={{duration:0.2}}
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                {/* <p className='my-2 font-medium text-dark'>{summary}</p> */}
                <div className='w-full mt-2 flex items-center justify-between'>
                      <Link href={link} target="_blank" className='text-lg font-semibold underline md:text-base'>Visit </Link>
                    <Link href={github} target="_blank" className='w-8 md:w-6'> <GithubIcon />{" "}
                    </Link>
                  

                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
      <Head>
        <title>Abtsega | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout>
          <AnimatedText
            text="Projects Propel Progress: Transforming Ideas into Impact"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
           <h2 className='font-bold text-4xl w-full text-center my-16 mt-32' >Publications</h2>
           <FeaturedProject
                title="Cybersecurity Imminent Threats with its Solutions in Higher Education - Springer"
                img={project12}
                summary="Published a research paper on a 4th Doctoral Symposium on Intelligence Enabled Research, 
                DOSIER 2021 on a reseach paper titled: Cybersecurity Imminent Threats in Higher Education with its Solution  co-authored
                with Dr.Debajyotiy Banink and Dr. Mahendra Kumal"
                link="https://orcid.org/0000-0001-6768-9920"
                github="https://raw.githubusercontent.com/Abtsega123/CertificateImages/main/research.jpg"
                type="Publication"
              />
                      <h2 className='font-bold text-4xl w-full text-center my-16 mt-32' >Projects</h2>

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Secured QR Code Based Library Attendance System"
                img={project1}
                summary="A secured attendance system for a school library management using a QR code. It's enables fast utilization and 
                security for the students information and library management system"
                link="https://github.com/Abtsega123/QR-based-Library-Attendance-System-Backend"
                github="https://github.com/Abtsega123/QR-based-Library-Attendance-System-Backend"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Secured Agora Video ChatApp"
                img={project2}
                summary="A secured video chatapp using built in Agora video chat mode. Enabling ease access 
                and giving a better consideration for a security and communication among users, it uses a built server using Agora. "
                link="https://github.com/Abtsega123/Agora-VideoChat-App"
                github="https://github.com/Abtsega123/Agora-VideoChat-App"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Cyberly NextJs BlogApp- Dertogada"
                img={project3}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://dertogada-blog-cnne.vercel.app/"
                github="https://github.com/Abtsega123/DertogadaBlog"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="AI Image Generator"
                img={project4}
                summary="AI based Image generator after taking inputs from the user. It enables a secured feature by eliminating a vulnerability."
                link="https://github.com/Abtsega123/AI-Image-generator"
                github="https://github.com/Abtsega123/AI-Image-generator"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Secured Payment System - Stripe"
                img={project5}
                summary="A secured payment system for commerce and any other online payment using a Stripe and other API to enable a secured payment"
                link="https://stripe-payment-xei5-3pv0ehbgg-abtsega123s-projects.vercel.app/"
                github="https://github.com/Abtsega123/Stripe-payment"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="College Version Threads App"
                img={project6}
                summary="Taking a feature of Threads-Instagram app and making it compatible for college use. It enables students have a 
                secured chat, videos and photoes post and share their story as well."
                link="https://threads-app-kiit-version.vercel.app/"
                github="https://github.com/Abtsega123/KIIT-Thread-App"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="3D Animated Portfolio Website"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://portfolio3-d-tailwindcss-vso1.vercel.app/"
                github="https://github.com/Abtsega123/Portfolio3D-Tailwindcss"
                type="Featured Project"
              />
            </div>
            
          </div>

          <Article
                          title="File Metadata Microservice"
                          date="September 6, 2023"
                          link="https://github.com/Abtsega123/File-Metadata-Microservice"
                           img={project7}
                      
                      />
                      <Article
                          title="URL Shortener"
                          date="September 6, 2023"
                          link="https://github.com/Abtsega123/url_shortener"
                           img={project8}
                      
                      />
                      <Article
                          title="Open Source Contribution"
                          date="September 6, 2023"
                          link="https://github.com/Abtsega123/first-contributions"
                          
                           img={project9}
                      
                      />
                      <Article
                          title="Flutter Meal  Apk"
                          date="September 6, 2023"
                          link="https://github.com/Abtsega123/Meal_App"
                           img={project10}
                      
                      /> 
                      <Article
                      title="Flutter World Time Apk"
                      date="September 6, 2023"
                      link="https://github.com/Abtsega123/World_Time"
                       img={project11}
                  
                  />
          
        </Layout>






        {/* this is it, the promptu */}
        
      </main>
    </>
  );
}

export default projects