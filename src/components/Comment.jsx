import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment ({ content }) {
    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                src="https://github.com/ninafernandes.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Nina Fernandes</strong>
                            <time title="24 de Janeiro às 17:24" dateTime="2023-01-24 17:24:30">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>03</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}