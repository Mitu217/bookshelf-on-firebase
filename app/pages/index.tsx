import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Welcome to Next.js for TypeScript!</h1>
    </Layout>
  )
}

export default IndexPage
