import styles from './style.module.css'
import jim from './jim.png'
import { useState } from 'react'
import whiteArrow from './assets/white-arrow.svg'

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

        <div className={'pt-[120px] grid gap-5 grid-cols-2'}>
          {people.map(TeamCard)}
        </div>
      </section>
    </div>
  )
}

function TeamCard({ title, name, link, img }) {
  const [hover, setHover] = useState(false)
  let imageClass =
    'rounded-[20px] absolute w-full object-cover ' + styles['transition']
  if (hover) imageClass += ' h-full '
  else imageClass += ' h-[70%] '

  let overlayClass = `${styles['overlay']} ${styles['transition']} absolute w-full h-full bg-black `
  if (hover) overlayClass += styles['overlay-visible']

  let arrowClass =  'h-[16px] '
  if (!hover) arrowClass += 'hidden'

  return (
    <div
      className="relative h-[300px] overflow-hidden rounded-[20px]"
      key={name}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={img} alt={name} className={imageClass} />

      <div className={overlayClass}></div>

      <div className="absolute bottom-2 left-0 right-0 px-5">
        <p className="">{title}</p>
        <div className="flex justify-between items-end">
          <p className="font-[600]">{name}</p>
          <img src={whiteArrow} alt="link arrow" className={arrowClass} />
        </div>
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
      <section className="flex gap-10 flex-col">
        <div className="flex flex-col gap-5">
          <h2 className="p-2 text-6xl font-[700] font-spaceGrotesk">Blog</h2>
          <button className="rounded-[15px] border-[0.5px] border-dark-blue px-[40px]">
            READ MORE ARTICLES arrow
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex gap-[40px]">
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
    <div className="border-t border-dark-blue">
      <p className="pt-[56px]">{category.toUpperCase()}</p>
      <p className="font-[600] md:text-[32px] pt-[24px]">{content}</p>
      <p className="font-spaceGrotesk font-[700] text-4xl md:text-[50px] pt-[80px]">
        {number}
      </p>
    </div>
  )
}
