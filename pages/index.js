import Head from "next/head"
import React, { useState } from "react";
import { Box, Container, Text } from '@chakra-ui/react'
import {getCuratedPhotos} from '../lib/api'

export default function Home({ data }) {
  // console.log(data);
  const [photos, setPhotos] = useState(data);
  return (
    <div>
      <Head>
        <title>Pexel Gallery</title>
      </Head>
      <Box overflow="hidden" bg="blue" minH="100vh">
        <Container>
          <Text color="white" textAlign="center" fontWeight="semibold" mb="1.5" pt="10" fontSize={["4xl", "4sm", "4sm", "5sm"]}>
            Geo Pexel Gallery
          </Text>
          {
  photos.map((pic) => (
    <img src={pic.src.original} width="300" height="300" />
  ))
}
        </Container>
      </Box>
  
    </div>
  )
}

export async function getServerSideProps(){
  const data = await getCuratedPhotos();
  return {
    props: {
      data,
    },
  };
}
