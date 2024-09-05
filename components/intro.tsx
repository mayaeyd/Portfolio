import Image from'next/image'
import authorImage from '@/public/images/authors/maya.jpg'

export default function Intro() { 
    return(
        <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb'>
            <div className='mt-2 flex-1 md:mt-0'>
            <h1 className="title no-underline">Hey, I&#39;m Maya.</h1>
            <p className='mt-3 font-light text-muted-foreground'>
                I&#39;m a web developer based in Beirut, Lebanon. I&#39;m 
                passionate about learning new technologies and always evolving 
                in my field.
            </p>
        </div>
        <div className='relative' >
            <Image
                className='flex-1 rounded-lg grayscale' 
                src={authorImage}
                alt='Maya Eid'
                width={175}
                height={175}
                priority  //disable lazy loading
            />
        </div>
        </section>
    )}