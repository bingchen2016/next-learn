import Link from 'next/link'
//import { useRouter } from 'next/router'

const article = ({ aarticle }) => {
  //const router = useRouter()
  //const { id } = router.query
  //return <div>This is an article {id}</div>
  //return <div>This is article {aarticle.id}</div>
  return (
    <>
      <h1>{aarticle.title}</h1>
      <p>{aarticle.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

//export const getServerSideProps = async (context) => {
//  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//  const aarticle = await res.json()

//  return {
//    props: {
//      aarticle
//    }
//  }
//}

export const getStaticProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

  const aarticle = await res.json()

  return {
    props: {
      aarticle
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')

  const articles = await res.json()

  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({params: {id: id.toString()}}))

  return {
    //paths: {params: {id: '1'}, params: {id: '2'}}
    paths,
    fallback: false
  }
}

export default article
