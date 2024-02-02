import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Banner from "../../Components/Banner/Banner"
import RowList from "../../Components/Rows/RowList/RowList"

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  )
}

export default Home
