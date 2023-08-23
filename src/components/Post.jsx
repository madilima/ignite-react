import styles from './Post.module.css';

export function Post () {
  return (
    <article className={styles.Post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://wonder-day.com/wp-content/uploads/2023/03/wonder-day-brunette-face-avatar-49.jpg"
          />
          <div className={styles.authorInfo}>
            <strong> Maria Lima</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title=" 17 de Agosto às 07:05 " dateTime="2023-08-17">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala Galera</p>
        <p>Acabei de subir mais um projeto no portifólio</p>
        <a href="">#novoprojeto</a> <a href=""> #nlw</a>{" "}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}