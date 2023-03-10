import Head from "next/head"
import Navbar from "@/comps/Navbar"
import Footer from "@/comps/Footer"
import styles from "../styles/Home.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title> lexsmith.finance | Home </title>
        <meta name="keywords" content="" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className="styles.text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </>
  )
}
