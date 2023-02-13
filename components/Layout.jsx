import React from 'react'
import Head from 'next/head'

function Layout({ children }) {
  return (
    <div className="layout">
        <Head>
          <title>Mousemove Parallax</title>
        </Head>
        <header></header>
        <main className="main-container">
          {children}
        </main>
        <footer></footer>
    </div>
  )
}

export default Layout