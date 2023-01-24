import styles from './Post.module.css'
export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://xesque.rocketseat.dev/users/avatar/profile-adefb756-39fa-49f6-ac28-7325573cece4-1673635519610.jpg" />
                    <div className={styles.authorInfo}>
                        <strong>Nina Fernandes</strong>
                        <span>Desenvolvedora Front-end</span>
                    </div>
                </div>
                <time title="24 de Janeiro às 17:24" dateTime="2023-01-24 17:24:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p><a href="#">jane.design/doctorcare</a></p>
            <p>
                <a href='#'>#novoprojeto</a>{' '}
                <a href='#'>#nlw</a>{' '}
                <a href='#'>#rocketseat</a>
            </p>
                
            </div>
        </article>
    )
}