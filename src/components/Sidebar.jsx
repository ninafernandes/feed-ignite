import { PencilSimpleLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
                alt="" 
            />
            
            <div className={styles.profile}>
                <Avatar 
                    src="https://xesque.rocketseat.dev/users/avatar/profile-adefb756-39fa-49f6-ac28-7325573cece4-1673635519610.jpg"
                />
                <strong>Nina Fernandes</strong>
                <span>Desenvolvedora Front-end</span>
            </div>
       
            <footer>
                <a href="#">
                    <PencilSimpleLine 
                        size={20}
                    />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}