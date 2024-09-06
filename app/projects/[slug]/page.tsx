import { getProjectBySlug, getProjects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'

export async function generateStaticParams(){
  const projects= await getProjects()
  const slugs= projects.map(project=>({slug: project.slug}))
  return slugs
}

export default async function Project({params}: {params : {slug: string}}) {

    const {slug}= params
    const project= await getProjectBySlug(slug)

    if (!project){  //404 page if slug doesn't exist
      notFound()
    }

    const { metadata, content }= project
    const { title, image, author, publishedAt }= metadata

  return (
      < section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
      <Link
        href='/projects'
        className='mb-8 inline-flex items-center gap-2 text-sm font-light'
      >
        <ArrowLeftIcon className='h-5 w-5' />
        <span>Back to projects</span>
      </Link>
      {image && (
      <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
        <Image
          src={image}
          alt={title || ''}
          className='object-cover'
          fill
        />
      </div>
      )}
  
      <header>
        <h1 className='title' >{title}</h1>
        <p className='mt-3 text-xs text-muted-foreground'>
          {author} / {formatDate(publishedAt ?? '')} 
        </p>
      </header>
      <main className='prose mt-16 dark:prose-invert'> {/* tailwind typography package will style the markdown automatically */}
        <MDXContent source={content} />
      </main>
    </div>
    </section>
  )
}
