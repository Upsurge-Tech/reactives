import styles from './style.module.css'
import TeamCard from './TeamCard'
import person from './assets/person.png'

export default function OurTeam() {
  const people = [
    { title: 'CEO & Founder', name: 'Robert Kang', link: '', img: person },
    { title: 'Project Manager', name: 'Emily Brown', link: '', img: person },
    { title: 'Finance Manager', name: 'David Chung', link: '', img: person },

    { title: 'HR Manager', name: 'Sarah Lee', link: '', img: person },
    { title: 'Head Engineer', name: 'Michael John', link: '', img: person },
    { title: 'Head Analyst', name: 'Jenefer Kim', link: '', img: person },
  ]

  return (
    <div
      className={
        styles['container'] + ' bg-dark-blue ' + styles['white-text-children']
      }
    >
      <section className="max-w-[1520px] m-auto">
        <h2 className="text-6xl md:text-[100px] text-center font-[700] font-spaceGrotesk">
          Our Team
        </h2>
        <p className="pt-[20px] text-center">
          The passionate people behind our every projects in WaveNet.
        </p>

        <div
          className={
            'pt-[120px] grid gap-5 md:gap-[78px] grid-cols-2 md:grid-cols-3'
          }
        >
          {people.map(TeamCard)}
        </div>
      </section>
    </div>
  )
}
