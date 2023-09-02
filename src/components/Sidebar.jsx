import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Siderbar () {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
       <Avatar hasBorder src="https://wonder-day.com/wp-content/uploads/2023/03/wonder-day-brunette-face-avatar-31.jpg" />

        <strong>Madu Lima</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
           <PencilLine size={20}/>
          Editar perfil</a>
      </footer>
    </aside>
  )
}