//this is the homepage. Anytime we want to craete a route index.js, we have to export a page.tsx or jsx from that directory 
import React from "react";

export default function Home(){
  return(
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">
          Portfolio
        </h1>
      </div>
    </section>
  )
}