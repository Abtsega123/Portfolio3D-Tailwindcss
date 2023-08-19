import React, { useRef } from 'react';
import Head from 'next/head'
import Layout from '../components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image';
import article1 from "../../public/images/articles/backend.jpg"
import article2 from "../../public/images/articles/data.jpg"
import article3 from "../../public/images/articles/deloitte.jpg"
import article4 from "../../public/images/articles/web.jpg"
import article5 from "../../public/images/articles/morgancyber.jpg"
import article6 from "../../public/images/articles/morgansoftware.jpg"
import article7 from "../../public/images/articles/research.jpg"
import article8 from "../../public/images/articles/workshop.jpg"
import article9 from "../../public/images/articles/alx.jpg"
import article10 from "../../public/images/articles/G20.jpg"
import article11 from "../../public/images/articles/linux.jpg"
import article12 from "../../public/images/articles/iaac.jpg"
import article13 from "../../public/images/articles/iymc.jpg"
import article14 from "../../public/images/articles/super.jpg"
import article15 from "../../public/images/articles/cybergoogle.jpg"
import article16 from "../../public/images/articles/ibmcyber.jpg"
import article17 from "../../public/images/articles/technicalgoogle.jpg"
import article18 from "../../public/images/articles/ibmcyber2.jpg"
import article19 from "../../public/images/articles/devtown1.jpg"
import article20 from "../../public/images/articles/udemyflutter.jpg"
import article21 from "../../public/images/articles/internkiit.jpg"
import article22 from "../../public/images/articles/devtownback.jpg"
import { motion } from "framer-motion"
import { useMotionValue } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';



const FramerImage = motion(Image);


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

const FeaturedArticles = ({ img, title, summary, link }) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl
         dark:bg-dark dark:border-light'>

             <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl'/>
                <Link href={link} target="_blank"
                className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
        
            
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

            <Link href={link} target="_blank">
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibol dark:text-primaryDark'></span>

        </li>
    )
}
const articles = () => {
  return (
    <>
      <Head>
        <title>Abtsega | Articles Page</title>
        <meta name="description" content="any description" />
          </Head>
          <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
              <Layout className='pt-16'>
                  
                  <AnimatedText text='Words Can Change The World' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                  <h2 className='font-bold text-4xl w-full text-center my-16 mt-32' >Certifications</h2>
          <ul className='grid grid-cols-3 gap-10 lg:gap-8 md:grid-cols-1 md:gap-y-16 '> {/* Added mx-auto and max-w-screen-lg */}
            <FeaturedArticles
              title="Back End Development and APIs"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
              img={article1}
            />
            <FeaturedArticles
              title="Data Analysis with Python"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
              img={article2}
                      />
                      <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
              img={article3}
                      />
                      <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
              img={article4}
                      />
                      <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
              img={article5}
                      />
                      <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
              img={article6}
                      />
                                <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
              img={article7}
                      />
                                <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
              img={article8}
                      />
                                <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
              img={article9}
                      />
                                <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
              img={article10}
                      />
                                <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
                          img={article11}
                          
                      />
                       <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
                          img={article12}
                          
                      />
                       <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
                          img={article13}
                          
                      />
                       <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
                          img={article14}
                          
                      />
                               <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
                          img={article15}
                          
                      />
                               <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
                          img={article16}
                          
                      />
                               <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
                          img={article17}
                          
                      />
                               <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
                          img={article18}
                          
                      />
                               <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
                          img={article19}
                          
                      />
                               <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
                          img={article20}
                          
                      />
                      
                               <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
                          img={article21}
                          
                      />
                               <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
                          img={article22}
                          
                      />
                  </ul>
                  <h2 className='font-bold text-4xl w-full text-center my-16 mt-32' >All Articles</h2>
                  <ul className='mx-auto max-w-screen-lg'>
                      <Article
                          title="From Validation in ReacctJs: Build A Reusable Custom Hook For Inputs And Errors"
                          date="March 23, 2023"
                          link="/"
                          img={article12}
                      
                      />
                       <Article
                          title="From Validation in ReacctJs: Build A Reusable Custom Hook For Inputs And Errors"
                          date="March 23, 2023"
                          link="/"
                          img={article13}
                      
                      />
                       <Article
                          title="From Validation in ReacctJs: Build A Reusable Custom Hook For Inputs And Errors"
                          date="March 23, 2023"
                          link="/"
                          img={article14}
                      
                      />
                       <Article
                          title="From Validation in ReacctJs: Build A Reusable Custom Hook For Inputs And Errors"
                          date="March 23, 2023"
                          link="/"
                          img={article15}
                      
                      />
                       <Article
                          title="From Validation in ReacctJs: Build A Reusable Custom Hook For Inputs And Errors"
                          date="March 23, 2023"
                          link="/"
                          img={article16}
                      
                      />
                       <Article
                          title="From Validation in ReacctJs: Build A Reusable Custom Hook For Inputs And Errors"
                          date="March 23, 2023"
                          link="/"
                          img={article17}
                      
                      />
                       <Article
                          title="From Validation in ReacctJs: Build A Reusable Custom Hook For Inputs And Errors"
                          date="March 23, 2023"
                          link="/"
                          img={article18}
                      
                      />
                  </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;