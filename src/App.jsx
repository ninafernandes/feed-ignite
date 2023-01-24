import { Header } from './components/Header'
import { Post } from './Post'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post  
        author="Nina Fernandes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error, harum reprehenderit placeat illum nemo praesentium, ratione eveniet minus non laudantium nesciunt commodi nisi iusto impedit delectus exercitationem, aut cum."
      />

      <Post  
        author="Diego Fernandes"
        content="Um novo post muito legal"
      />

    </div>
  )
}
