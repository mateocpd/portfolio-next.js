import Head from 'next/head'
import Image from 'next/image'
import About from '/components/About'
import Contact from '/components/Contact'
import Main from '/components/Main'
import Navbar from '/components/NavBar'
import Proyects from '/components/Proyects'
import Skills from '/components/Skills'
import Certificates from '/components/Certificates'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Mateo | Full Stack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar/>
    <Main/>
    <About/>
    <Skills/>
    <Certificates/>
    <Proyects/>
    <Contact/>
    </div>
  )
}
