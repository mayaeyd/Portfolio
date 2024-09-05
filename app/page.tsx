//this is the homepage. Anytime I want to create a route index.js, I have to export a page.tsx or jsx from that directory 
import Intro from "@/components/intro";
import {MDXRemote} from 'next-mdx-remote/rsc';

export default function Home(){
  const content = '# This is a heading'
  return(
    <section className="py-24">
      <div className="container max-w-3xl">
        <Intro />
        <MDXRemote source={content} />
      </div>
    </section>
  )
}