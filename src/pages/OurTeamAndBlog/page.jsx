import styles from './style.module.css'

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
    { title: 'CEO & Founder', name: 'Robert Kang' },
    { title: 'Project Manager', name: 'Emily Brown' },
    { title: 'Finance Manager', name: 'David Chung' },

    { title: 'HR Manager', name: 'Sarah Lee' },
    { title: 'Head Engineer', name: 'Michael John' },
    { title: 'Head Analyst', name: 'Jenefer Kim' },
  ]

  return (
    <div className={'bg-dark-blue ' + styles['white-text-children']}>
      <section>
        <h2 className="">Our Team</h2>
        <p>The passionate people behind our every projects in WaveNet.</p>
      </section>
    </div>
  )
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
    <div className={'bg-light-blue ' + styles['dark-blue-text-children']}>
      <section>
        <h2 className="">Blog</h2>
        <button>Read More Artilces</button>
      </section>
    </div>
  )
}
