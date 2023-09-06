import { Post } from "./components/Post"
import { Header } from "./components/Header"

import styles from "./App.module.css"

import "./global.css"
import { Siderbar } from "./components/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://wonder-day.com/wp-content/uploads/2023/03/wonder-day-brunette-face-avatar-31.jpg",
      name: "Maria Lima",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala Galera" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no portifólio",
      },
      { type: "link", content: "https://github.com/madilima" },
    ],
    publishedAt: new Date("2023-07-20 03:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl:
        "https://static.vecteezy.com/system/resources/previews/021/907/479/non_2x/anime-girl-avatar-ai-generated-photo.jpg",
      name: "Fernandes",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala Galera" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no portifólio",
      },
    ],
    publishedAt: new Date("2023-07-20 03:00:00"),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          {posts.map((post) => {
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
