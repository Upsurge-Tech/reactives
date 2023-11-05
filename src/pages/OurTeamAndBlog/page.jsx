import styles from './style.module.css'
import jim from './jim.png'

export default function OurTeamAndBlog() {
  return (
    <div className={styles['fs-20-children']}>
      <OurTeam />
      <Blog />
    </div>
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
    <div
      className={
        styles['container'] + ' bg-dark-blue ' + styles['white-text-children']
      }
    >
      <section>
        <h2 className="text-6xl font-[700] font-spaceGrotesk">Our Team</h2>
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
  return (
    <div className="flex flex-col gap-2" key={name + link}>
      <img src={img} alt={name} className="rounded-[25px]" />
      <div>
        <p className="text-[]">{title}</p>
        <p className="font-[600]">{name}</p>
      </div>
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
    <div
      className={
        styles['container'] +
        ' bg-light-blue ' +
        styles['dark-blue-text-children']
      }
    >
      <section className='flex gap-10 flex-col'>
        <div className="flex flex-col gap-5">
          <h2 className="p-2 text-6xl font-[700] font-spaceGrotesk">Blog</h2>
          <button className="rounded-[15px] border-[0.5px] border-dark-blue px-[40px]">
            READ MORE ARTICLES arrow
          </button>
        </div>

        <div className='flex flex-col items-center'>
          <div className='flex gap-[40px]'>
            <button>left</button>
            <button>right</button>
          </div>

          <div>{BlogBox(blogs[0])}</div>
        </div>

        <div className="flex flex-col justify-end"></div>
      </section>
    </div>
  )
}

function BlogBox({ category, content, number }) {
  return (
    <div className='border-t border-dark-blue'>
      <p className='pt-[56px]'>{category.toUpperCase()}</p>
      <p className="font-[600] md:text-[32px] pt-[24px]">{content}</p>
      <p className='font-spaceGrotesk font-[700] text-4xl md:text-[50px] pt-[80px]'>{number}</p>
    </div>
  )
}
