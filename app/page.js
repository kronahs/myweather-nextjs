import Image from "next/image"
import HomeContent from "./HomeContent";
import { Suspense } from "react";
import Loading from "./loading";


export default function Home() {

  return (
    <main className="">
      <Suspense fallback={<Loading/>}>
        <HomeContent/>
      </Suspense>
    </main>
  )
}
