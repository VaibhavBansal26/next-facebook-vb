import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import { db } from '../firebase'


export default function Home({session,posts}) {
  if(!session) return <Login/>
  console.log(session)
  
  return (
    <div className="h-screen bg-gary-100 overflow-hidden bod">
      <Head>
        <title>Facebook - vb</title>
      </Head>
      <Header/>
      <main className="flex">
        <Sidebar/>
        <Feed posts={posts}/>
        <Widgets/>
      </main>
    </div>
  )
}

export async function getServerSideProps(context){
  //Get user
  const session = await getSession(context);
  const posts = await db.collection("posts").orderBy("timestamp","desc").get();
  const docs = posts.docs.map((post) => ({
    id:post.id,
    ...post.data(),
    timestamp:null
  }))
  return{
    props:{
      session,
      posts:docs
    }
  }
}
