"use client"

import { useEffect, useState } from "react";
import PageLayout from "./pagelayout";
import Sidebar from "./pagelayout/Sidebar";




export default function Home() {
  const [file, setFile] = useState()

  useEffect(()=> {
    fetch("http://127.0.0.1:5002/profile/64bffeeea611ff5ddf5f5304" ) // get info
    .then(res => res.json()) 
    .then(setFile) // set file
    .catch(err => alert(err))
  }, [])

  
return(
  <PageLayout>
  <Sidebar />
  </PageLayout>
)
}