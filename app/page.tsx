//this is the homepage. Anytime I want to create a route index.js, I have to export a page.tsx or jsx from that directory 
import Intro from "@/components/intro";
import RecentPosts from "@/components/recent-posts";

export default function Home(){
  return(
    <section className="py-24">
      <div className="container max-w-3xl">
        <Intro />
        <RecentPosts />
      </div>
    </section>
  )
}