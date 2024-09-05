import React from 'react'

export default async function Post({params}: {params : {slug: string}}) {

    const {slug}= params
    const content= await getPostBySlug(slug)
  return (
    <div>
      Post
    </div>
  )
}
