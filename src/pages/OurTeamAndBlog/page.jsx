import styles from './style.module.css'
import OurTeam from './OurTeam'
import Blog from './Blog'

export default function OurTeamAndBlog() {
  return (
    <div className={styles['fs-20-children']}>
      <OurTeam />
      <Blog />
    </div>
  )
}
