import { JSX, SVGProps } from 'react';

const navigation = [
    {
        name: 'LinkedIn',
        href : '#',
        icon:(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>)=>(
            <svg fill='currentColor' viewBox='0 0 448 512' {...props}>
                <path
                    fill='currentColor'
                    d='M100.28 448H7.4V148.9H92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53'
                />
            </svg>
        )
    },
    {
        name: 'X',
        href : '#',
        icon:(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>)=>(
            <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
                <path d='M13.6823 10.6218L20.2391 88zM53.79 108.1C24.09 108.1 0 83.5 0 53' />
            </svg>
        )
    },
    {
        name: 'GitHub',
        href : '#',
        icon:(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>)=>(
            <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
                <path
                    fillRule='evenodd'
                    d='M100.28 448H7.4V148.9H92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53'
                    clipRule='evenodd'
                />
            </svg>
        )
    },
    {
        name: 'Youtube',
        href : '#',
        icon:(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>)=>(
            <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
                <path
                    fillRule='evenodd'
                    d='M100.28 448H7.4V148.9H92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53'
                    clipRule='evenodd'
                />
            </svg>
        )
    }
]

export default function Footer(){
    return (
        <footer className='py-8'>
            <div className='container max-w-3xl'>
                <div className='md:flex md:items-center md:justify-between'>
                    <div className='flex justify-center space-x-6 md:order-2'>
                        {navigation.map(item => (
                        <a
                            key={item.name}
                            href={item.href}
                            target='_blank'  //Opens the linked document in a new window or tab
                            rel='noreferrer noopener'
                            className='text-muted-foreground hover:text-foreground'
                        >
                            <span className='sr-only'>{item.name}</span>
                                <item.icon aria-hidden='true' className='h-5 w-5' />
                        </a>
                        ))}
                    </div>
                    <div className='mt-8 md:order-1 md:mt-0'>
                        <p className='text-center text-xs leading-5 text-muted-foreground'>
                            &copy; {new Date().getFullYear()}Your Company. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}