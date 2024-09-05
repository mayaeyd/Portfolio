import { getPostBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function Post({params}: {params : {slug: string}}) {

    const {slug}= params
    const post= await getPostBySlug(slug)

    if (!post){  //404 page if slug doesn't exist
      notFound()
    }

    const { metadata, content }= post
    const { title, image, author, publishedAt }= metadata

  return (
      < section className=' pb-24 pt-32'>
      <div className='container max-w-3x1'>
      < Link
      href='/posts'
      className='mb-8 inline-flex items-center gap-2 text-sm font-light tex
      <ArrowLeftIcon className='h-5 w-5' />
      <span>Back to posts</span>
      </Link>
      [image && K
      <div className=' relative mb-6 h-96 w-full overflow-hidden rounded-1g"
      Smage
      I
      SIC-Limagel
      altafttle Jl
      className='oblect-cover!
      £1
      </div>
      +7
      48
      <header>
      <h1 className='title' >[title}</h1>
      <p ClassName='mt-3 text-xs text-muted-foreground'>
      {author: / [formatDate(publishedAt ?? "')} </p>
      </header>
      <main className=' prose mt-16 dark:prose-invert
  )
}
