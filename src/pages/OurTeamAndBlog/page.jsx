import styles from './style.module.css'
import jim from './jim.png'

export default function OurTeamAndBlog() {
  return (
    <>
      <OurTeam />
      <Blog />
    </>
  )
}

function OurTeam() {
  const people = [
    { title: 'CEO & Founder', name: 'Robert Kang', link: '', img: jim },
    { title: 'Project Manager', name: 'Emily Brown', link: '', img: jim },
    { title: 'Finance Manager', name: 'David Chung', link: '', img: jim },

    { title: 'HR Manager', name: 'Sarah Lee', link: '', img: jim },
    { title: 'Head Engineer', name: 'Michael John', link: '', img: jim },
    { title: 'Head Analyst', name: 'Jenefer Kim', link: '', img: jim },
  ]

  return (
    <div className={styles['container'] + ' bg-dark-blue ' + styles['white-text-children']}>
      <section className='py-[200px]'>
        <h2 className="text-6xl font-[700]">Our Team</h2>
        <p className="pt-[20px]">
          The passionate people behind our every projects in WaveNet.
        </p>

        <div className={'pt-[120px] grid gap-5 grid-cols-2 grid-rows-[300px]'}>
          {people.map(TeamCard)}
        </div>
      </section>
    </div>
  )
}

function TeamCard({ title, name, link, img }) {

  return <div className="flex flex-col gap-2" key={name+link}>
    <img src={img} alt={name} className='rounded-[25px]'/>
    <div>
      <p className='text-[]'>{title}</p>
      <p className='font-[600]'>{name}</p>
    </div>
  </div>
}

function Blog() {
  const blogs = [
    {
      category: 'tech',
      content:
        'Why Cloud Computing is Essential for Your Business in Year 2023',
      number: '01.03',
    },
    {
      category: 'review',
      content:
        '5 Ways Software Developer Can Boost Your Business Quicker Than Ever',
      number: '20.05',
    },
    {
      category: 'business',
      content:
        '5 Ways Business Developer Can Boost Your Business Quicker Than Ever',
      number: '20.05',
    },
    {
      category: 'family',
      content:
        '10 Children Business Developers that Can Boost Your Business Quicker Than Ever',
      number: '20.05',
    },
  ]

  return (
    <div className={ ' bg-light-blue ' + styles['dark-blue-text-children']}>
      <section>
        <h2 className="">Blog</h2>
        <button>Read More Artilces</button>
      </section>
    </div>
  )
}
