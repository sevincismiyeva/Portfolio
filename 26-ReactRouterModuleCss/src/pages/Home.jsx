import React from 'react'
import Features from '../components/features/Features'
import Cards from '../components/cards/Cards'
import Customers from '../components/customers/Customers'
import Form from '../components/form/Form'

const Home = () => {
  return (
    <div>
        <Features/>
        <Cards/>
        <Customers/>
        <Form/>
    </div>
  )
}

export default Home