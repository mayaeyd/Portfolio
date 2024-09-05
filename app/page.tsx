//this is the homepage. Anytime we want to craete a route index.js, we have to export a page.tsx or jsx from that directory 
import Intro from "@/components/intro";
import React from "react";

export default function Home(){
  return(
    <section className="py-24">
      <div className="container max-w-3xl">
        <Intro />
      </div>
    </section>
  )
}