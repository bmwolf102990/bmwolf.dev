import { Heading } from "@/components/Heading/Heading";
import { BucketList } from "@/components/BucketList/BucketList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className='bg-white pt-20 pl-20'>
        <Heading
          level={6}
          content='Hi, my name is'
          sx={{fontWeight: 'lighter'}}
        />
        <Heading
          level={1}
          content='Bryan Wolf'
          sx={{fontWeight: 'bold'}}
        />
        <Heading
          level={6}
          content='I love to code and design stuff'
          sx={{fontWeight: 'lighter'}}
        />
        <div className='curve'></div>
      </section>
      <section className='bg-stacked_waves_purple bg-cover bg-no-repeat h-[875px] pt-24 pl-20'>
        <Heading
          level={6}
          content='Passion Project'
          sx={{paddingTop: '15rem', fontWeight: 'bold', color: 'white'}}
        />
        <Heading 
          level={3}
          content='Digital Ramblings'
          sx={{fontWeight: 'bold', color: 'white'}}
        />
        <p className='w-1/3 font-thin text-white mb-5'>
          {`Digital Ramblings is a podcast that I am developing with my buddy Anthony. It is a way for us to be creative and have some fun.`}
        </p>
        <Link className='block hover:underline text-white' href='#'>
          Check it out
          <FontAwesomeIcon className='ml-2' icon={faArrowAltCircleRight} />
        </Link>
      </section>
      <section className='grid grid-cols-2 bg-white h-[300px] pt-16 pl-20'>
        <div>
          <Heading
            level={6}
            content='2023-Present'
            sx={{fontWeight: 'bold'}}
          />
          <Heading 
            level={3}
            content='Banyan Labs & Indeed'
            sx={{fontWeight: 'bold'}}
          />
          <p className='font-thin mb-5'>
            {`In 2023 I began working through Banyan Labs as a contracted Front End Engineer for Indeed. It has been an unbelievable learning experience and a motivator to keep developing my skills.`}
          </p>
          <Link className='block hover:underline' href='https://banyanlabs.io'>
            Learn more about Banyan Labs
            <FontAwesomeIcon className='ml-2' icon={faArrowAltCircleRight} />
          </Link>
        </div>
        <div>
          <Image
            className='scale-150 translate-x-24 translate-y-40' 
            src='/banyan_logo.png'
            alt=''
            width={200}
            height={200}
          />
          <Image
            className='scale-150 origin-top-right translate-x-80 translate-y-8 rotate-12' 
            src='/indeed_logo.svg'
            alt=''
            width={300}
            height={300}
          />
        </div>
      </section>
      <section className='bg-stacked_waves_red bg-cover bg-no-repeat h-[875px] pt-4 pl-20'>
        <Heading
          level={6}
          content='Passion Project'
          sx={{paddingTop: '15rem', fontWeight: 'bold', color: 'white'}}
        />
        <Heading 
          level={3}
          content='visualDev.io'
          sx={{fontWeight: 'bold', color: 'white'}}
        />
        <p className='w-1/2 font-thin text-white mb-5'>
          {`Web development learning tools for visual learners.`}
          <br />
          <br />
          {`Do you have trouble understanding how something like a binary search works JUST from thinking it through? That is the problem that visualDev.io aims to solve; by providing a suite of visually beautiful interactive learning apps that let you SEE how code and algorithms do what they do.`}
        </p>
        <Link className='block hover:underline text-white' href='#'>
          Check it out
          <FontAwesomeIcon className='ml-2' icon={faArrowAltCircleRight} />
        </Link>
      </section>
      <section className='grid grid-cols-2 bg-white h-[300px] pl-20'>
        <div>
          <Heading
            level={6}
            content='2022-2023'
            sx={{fontWeight: 'bold'}}
          />
          <Heading 
            level={3}
            content='Shield Bar & JTC'
            sx={{fontWeight: 'bold'}}
          />
          <p className='font-thin mb-5'>
            {`I joined Shield Bar Marketing in 2022 as a Website Design Lead. I helped design and develop 15+ websites for clients and helped launch a rebranding and redesign campaign for SBM's flagship site.`}
            <br />
            <br />
            {`I also enrolled in and graduated from Justice Through Code's Python & Django full stack web development intensive. It was an amazing learning and community building experience which I will be forever grateful for.`}
          </p>
          <Link className='block hover:underline' href='https://shieldbar.com'>
            Learn more about Shield Bar Marketing
            <FontAwesomeIcon className='ml-2' icon={faArrowAltCircleRight} />
          </Link>
          <Link className='block hover:underline mb-2' href='https://centerforjustice.columbia.edu/justicethroughcode'>
            Learn more about Justice Through Code
            <FontAwesomeIcon className='ml-2' icon={faArrowAltCircleRight} />
          </Link>
        </div>
        <div>
          <Image
            className='scale-150 translate-x-20 translate-y-10' 
            src='/sbm_logo.png'
            alt=''
            width={200}
            height={200}
          />
          <Image
            className='scale-150 origin-top-right translate-x-80 translate-y-16 rotate-225' 
            src='/jtc_logo.jpeg'
            alt=''
            width={300}
            height={300}
          />
        </div>
      </section>
      <section className='bg-stacked_waves_green bg-cover bg-no-repeat h-[875px] pt-16 pl-20'>
        <Heading
          level={6}
          content='Open Source'
          sx={{paddingTop: '15rem', fontWeight: 'bold', color: 'white'}}
        />
        <Heading 
          level={3}
          content='LinksHub & Milan'
          sx={{fontWeight: 'bold', color: 'white'}}
        />
        <p className='w-1/2 font-thin text-white mb-5'>
          {`Collaboration is the heart and soul of the internet. So in that spirit, I contribute to the development of open source projects like LinksHub and Milan.`}
        </p>
        <Link className='block hover:underline text-white mb-2' href='https://linkshub.dev'>
          Learn more about LinksHub
          <FontAwesomeIcon className='ml-2' icon={faArrowAltCircleRight} />
        </Link>
        <Link className='block hover:underline text-white' href='https://milanhub.org'>
          Learn more about Milan
          <FontAwesomeIcon className='ml-2' icon={faArrowAltCircleRight} />
        </Link>
      </section>
      <section className='grid grid-cols-2 bg-white h-[300px] pt-10 pl-20'>
        <div>
          <Heading
            level={6}
            content='2020-2022'
            sx={{fontWeight: 'bold'}}
          />
          <Heading 
            level={3}
            content='Persevere Now'
            sx={{fontWeight: 'bold'}}
          />
          <p className='font-thin mb-5'>
            {`I started my journey into software engineering and web development with the help of an organization known as Persevere Now. Simply put, they changed my life forever.`}
          </p>
          <Link className='block hover:underline mb-2' href='https://perseverenow.org'>
            Learn more about Persevere
            <FontAwesomeIcon className='ml-2' icon={faArrowAltCircleRight} />
          </Link>
        </div>
        <div>
          <Image
            className='scale-150 translate-x-20 translate-y-40 -rotate-12' 
            src='/persevere_logo.png'
            alt=''
            width={400}
            height={400}
          />
        </div>
      </section>
      <section className='bg-stacked_waves_orange bg-cover bg-no-repeat h-[930px] pt-24 pl-20'>
        <Heading
          level={6}
          content='Blogging'
          sx={{paddingTop: '25rem', fontWeight: 'bold', color: 'white'}}
        />
        <Heading 
          level={3}
          content='Medium'
          sx={{fontWeight: 'bold', color: 'white'}}
        />
        <p className='w-1/2 font-thin text-white mb-5'>
          {`I recently began putting some of my thoughts into words. Not sure if anyone actually reads any of it, but I do it for me, not for reads.`}
        </p>
        <Link className='block hover:underline text-white' href='#'>
          Check it out
          <FontAwesomeIcon className='ml-2' icon={faArrowAltCircleRight} />
        </Link>
      </section>
      <section className='bg-white h-[800px] pt-12 pl-20'>
        <Heading
          level={3}
          content='Bucket List'
          sx={{fontWeight: 'bold'}}
        />
        <Heading 
          level={6}
          content='These are just a few of my attainable dreams'
          sx={{fontWeight: 'lighter'}}
        />
        <BucketList />
      </section>
      <section className='bg-stacked_waves_blue bg-cover bg-no-repeat h-[875px] pt-12 pl-20'>
      <Heading
          level={3}
          content='Connect with me'
          sx={{paddingTop: '10rem', fontWeight: 'bold', color: 'white'}}
        />
        <Heading 
          level={6}
          content='This is just a bit of filler text'
          sx={{fontWeight: 'lighter', color: 'white'}}
        />
      </section>
      <section className='bg-white h-[400px] pt-10 pl-20'>
        
      </section>
    </main>
  )
}
