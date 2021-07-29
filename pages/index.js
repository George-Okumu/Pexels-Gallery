import Head from "next/head"
import React, { useState } from "react";
import { getCuratedPhotos } from '../lib/api'

export default function Home({ data }) {
  // console.log(data);
  const [photos, setPhotos] = useState(data);
  return (
    <div>
      <Head>
        <title>Pexel Gallery</title>
      </Head>
      <div className="container max-auto">

      <div className="overflow-hidden bg-blue-900 min-h-full">
        <h1 className="text-center p-4 text-white text-2xl">
          Pexel Gallery
        </h1>
        <div className="grid grid-cols-4 gap-4">
          {
            photos.map((pic) => (
                <img src={pic.src.original}/>
              
            ))
          }
          </div>
      </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const data = await getCuratedPhotos();
  return {
    props: {
      data,
    },
  };
}
