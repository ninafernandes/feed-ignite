import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://xesque.rocketseat.dev/users/avatar/profile-adefb756-39fa-49f6-ac28-7325573cece4-1673635519610.jpg",
      name: "Nina Fernandes",
      role: "Desenvolvedora Front-end"
    },
    content: [
      { type: 'paragraph', content:'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'nina.design/doctorcare'},

    ],
    publishedAt: new Date('2023-01-24 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/murillotsouza.png",
      name: "Murillo Tavares",
      role: "Desenvolvedor Web"
    },
    content: [
      { type: 'paragraph', content:'Fala galeraa 👋' },
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'murillo.design/doctorcare'},

    ],
    publishedAt: new Date('2023-01-24 18:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      
    <div className={styles.wrapper}>
      <Sidebar />

      <main>
        {posts.map(post => {
          return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
      </main>
    </div>
    </div>
  )
}
