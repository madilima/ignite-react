import { Post } from "./components/Post"
import { Header } from "./components/Header"

import styles from "./App.module.css"

import "./global.css"
import { Siderbar } from "./components/Sidebar"

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <Siderbar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cumque cupiditate sunt suscipit architecto debitis pariatur neque, voluptatem doloremque atque porro autem ex aut vel quos voluptas rem possimus corrupti?"
          />

          <Post author="Gabriel" content="Um novo projeto" />
        </main>
      </div>
    </div>
  )
}
