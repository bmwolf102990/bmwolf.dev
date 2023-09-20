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
          content='I love all things tech'
          sx={{fontWeight: 'lighter'}}
        />
        <div className='curve'></div>
      </section>
      <section className='bg-stacked_waves_purple bg-cover bg-no-repeat h-[875px] pt-20 pl-20'>
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
        <p className='w-1/2 font-thin text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis inventore error ex delectus quam doloremque, architecto, debitis aliquid laudantium, maxime id. At earum autem aliquam, deserunt accusantium natus veritatis!
        </p>
      </section>
      <section className='grid grid-cols-2 bg-white h-[300px] pt-10 pl-20'>
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
          <p className='w-1/2 font-thin mb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis inventore error ex delectus quam doloremque, architecto, debitis aliquid laudantium, maxime id. At earum autem aliquam, deserunt accusantium natus veritatis!
          </p>
          <Link className='block hover:underline' href='https://banyanlabs.io'>
            Learn more about Banyan Labs
            <FontAwesomeIcon className='ml-2' icon={faArrowAltCircleRight} />
          </Link>
        </div>
        <div>
          <Image
            className='scale-150 translate-x-40 translate-y-24' 
            src='/banyan_logo.png'
            alt=''
            width={150}
            height={150}
          />
          <Image
            className='scale-150 origin-top-right translate-x-80 translate-y-24 rotate-45' 
            src='/indeed_logo.svg'
            alt=''
            width={300}
            height={300}
          />
        </div>
      </section>
      <section className='bg-stacked_waves_red bg-cover bg-no-repeat h-[875px] pt-20 pl-20'>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis inventore error ex delectus quam doloremque, architecto, debitis aliquid laudantium, maxime id. At earum autem aliquam, deserunt accusantium natus veritatis!
        </p>
        <Link className='block hover:underline text-white' href='#'>
          Check it out
          <FontAwesomeIcon className='ml-2' icon={faArrowAltCircleRight} />
        </Link>
      </section>
      <section className='grid grid-cols-2 bg-white h-[300px] pt-15 pl-20'>
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
          <p className='w-1/2 font-thin mb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis inventore error ex delectus quam doloremque, architecto, debitis aliquid laudantium, maxime id. At earum autem aliquam, deserunt accusantium natus veritatis!
          </p>
          <Link className='block hover:underline mb-2' href='https://centerforjustice.columbia.edu/justicethroughcode'>
            Learn more about Justice Through Code
            <FontAwesomeIcon className='ml-2' icon={faArrowAltCircleRight} />
          </Link>
          <Link className='block hover:underline' href='https://shieldbar.com'>
            Learn more about Shield Bar Marketing
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
      <section className='bg-stacked_waves_green bg-cover bg-no-repeat h-[875px] pt-20 pl-20'>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis inventore error ex delectus quam doloremque, architecto, debitis aliquid laudantium, maxime id. At earum autem aliquam, deserunt accusantium natus veritatis!
        </p>
        <Link className='block hover:underline text-white mb-2' href='https://shieldbar.com'>
          Learn more about LinksHub
          <FontAwesomeIcon className='ml-2' icon={faArrowAltCircleRight} />
        </Link>
        <Link className='block hover:underline text-white' href='https://centerforjustice.columbia.edu/justicethroughcode'>
          Learn more about Milan
          <FontAwesomeIcon className='ml-2' icon={faArrowAltCircleRight} />
        </Link>
      </section>
      <section className='grid grid-cols-2 bg-white h-[300px] pt-20 pl-20'>
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
          <p className='w-1/2 font-thin mb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis inventore error ex delectus quam doloremque, architecto, debitis aliquid laudantium, maxime id. At earum autem aliquam, deserunt accusantium natus veritatis!
          </p>
          <Link className='block hover:underline mb-2' href='https://perseverenow.org'>
            Learn more about Persevere
            <FontAwesomeIcon className='ml-2' icon={faArrowAltCircleRight} />
          </Link>
        </div>
        <div>
          <Image
            className='scale-150 translate-y-32 -rotate-12' 
            src='/persevere_logo.png'
            alt=''
            width={400}
            height={400}
          />
        </div>
      </section>
      <section className='bg-stacked_waves_orange bg-cover bg-no-repeat h-[930px] pt-20 pl-20'>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis inventore error ex delectus quam doloremque, architecto, debitis aliquid laudantium, maxime id. At earum autem aliquam, deserunt accusantium natus veritatis!
        </p>
        <Link className='block hover:underline text-white' href='https://shieldbar.com'>
          Check it out
          <FontAwesomeIcon className='ml-2' icon={faArrowAltCircleRight} />
        </Link>
      </section>
      <section className='bg-white h-[800px] pt-20 pl-20'>
        <Heading
          level={3}
          content='Bucket List'
          sx={{fontWeight: 'bold'}}
        />
        <Heading 
          level={6}
          content='This is just a bit of filler text'
          sx={{fontWeight: 'lighter'}}
        />
        <BucketList />
      </section>
      <section className='bg-stacked_waves_blue bg-cover bg-no-repeat h-[875px] pt-20 pl-20'>
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
      <section className='bg-white h-[400px] pt-20 pl-20'>
        
      </section>
    </main>
  )
}
