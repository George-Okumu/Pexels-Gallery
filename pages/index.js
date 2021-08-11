import Head from "next/head"
import React, { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { getCuratedPhotos, getqueryPhotos } from '../lib/api'

export default function Home({ data }) {
  // console.log(data);
  const [photos, setPhotos] = useState(data);
  const [query, setQuery] = useState("");
 

  const handleSubmit = async (e) => {
    await e.preventDefault();
    if (query == "") {
      toast.error("Cannot search empty photo", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      const res = await getqueryPhotos(query);
      await setPhotos(res);
      await setQuery("");
    }
  };

  return (
    <div>
      <Head>
        <title>Pexel Gallery</title>
      </Head>
      <div className="container max-auto">

        <div className=" bg-blue-500 bg-cover">
          <h1 className="text-center p-4 text-white text-2xl underline">
            Geo Pexel Gallery
        </h1>
          <div className="flex justify-center pb-4 ">
            
            <form>
              <div class="p-8">
                <div class="bg-white flex items-center rounded-full shadow-xl">
                  <input class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for your favorite photo" />
                  <div class="p-4">
                    <button class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center" onClick={handleSubmit}>
                      search
      </button>
                  </div>
                </div>
              </div>

            </form>
          </div>
          <ToastContainer/>
          <div className="pl-2 pr-2 flex justify-center">
            <div className="grid grid-cols-3 gap-2">
              {
                photos.map((pic) => (
                  <div key={pic.id} className="overflow-hidden shadow bg-white rounded hover:bg-purple-700">
                    <Image src={pic.src.original} height="500" width="400" alt="Picture" />
                  </div>


                ))
              }
            </div>
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
