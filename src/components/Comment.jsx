import { useState } from "react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"
import { ThumbsUp, Trash } from "phosphor-react"

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }
 
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://static.vecteezy.com/system/resources/previews/021/907/479/non_2x/anime-girl-avatar-ai-generated-photo.jpg"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fernandes</strong>
              <time title=" 17 de Agosto às 07:05 " dateTime="2023-08-17">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
