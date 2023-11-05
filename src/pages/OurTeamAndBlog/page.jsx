import styles from './style.module.css'
import jim from './jim.png'
import { useState } from 'react'
import whiteArrow from './assets/white-arrow.svg'
import longArrow from './assets/long-arrow.svg'
import rightArrow from './assets/right-arrow.svg'
import leftArrow from './assets/left-arrow.svg'

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

function TeamCard({ title, name, link, img }) {
  const [hover, setHover] = useState(false)

  //handles size increase on hover
  let cardClass = `relative h-[300px] md:h-[586px] overflow-hidden rounded-[20px] ${styles['transition']} `
  if (hover) cardClass += styles['card-scale']

  //handles image filling on hover
  let imageClass = `rounded-[20px] absolute w-full object-cover ${styles['transition']}`
  if (hover) imageClass += ' h-full'
  else imageClass += ' h-[70%] lg:h-[80%] '

  //handles linear gradient shadowing? on hover
  let overlayClass = `${styles['overlay']} ${styles['transition']} absolute w-full h-full bg-black `
  if (hover) overlayClass += styles['overlay-visible']

  //arrow only visible on hover
  let arrowClass = 'h-[16px] md:h-auto '
  if (!hover) arrowClass += 'hidden'

  return (
    <div
      className={cardClass}
      key={name}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={img} alt={name} className={imageClass} />

      <div className={overlayClass}></div>

      <div className="absolute bottom-2 left-0 right-0 px-5">
        <p className="">{title}</p>
        <div className="flex justify-between items-end">
          <p className="font-[600] md:text-[32px]">{name}</p>
          <img src={whiteArrow} alt="link arrow" className={arrowClass} />
        </div>
      </div>
    </div>
  )
}

function Blog() {
  const [index, setIndex] = useState(0)
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
    {
      category: 'hidden',
      content:
        '10 Children Business Developers that Can Boost Your Business Quicker Than Ever',
      number: '20.05',
    }

  ]

  const hasLeft = index > 0
  const hasRight = index < blogs.length - 2
  //go right or left if possible
  const goRight = () => hasRight && setIndex((index + 2))
  const goLeft = () => hasLeft && setIndex((index - 2))

  return (
    <div
      className={
        styles['container'] +
        ' bg-light-blue ' +
        styles['dark-blue-text-children']
      }
    >
      <section className="max-w-[1620px] m-auto">
        <div className="flex gap-10 flex-col md:flex-row justify-between ">
          <div className="flex flex-col gap-5 justify-between">
            <h2 className="text-6xl md:text-[100px] font-[700] font-spaceGrotesk">
              Blog
            </h2>
            <button className="rounded-[15px] text-[16px] border-[0.5px] border-dark-blue px-[40px] py-[20px] flex gap-[18px]">
              READ MORE ARTICLES <img src={longArrow} alt="arrow" />
            </button>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-[40px] h-[150px] justify-end">
              <button className={hasLeft ? '' : 'opacity-50'} onClick={goLeft}>
                <img src={leftArrow} alt="left" />
              </button>
              <button
                className={hasRight ? '' : 'opacity-50'}
                onClick={goRight}
              >
                <img src={rightArrow} alt="right" />
              </button>
            </div>

            <div className="flex gap-[30px]">
              {blogs[index] && BlogBox(blogs[index])}
              {blogs[index+1] && BlogBox(blogs[index+1])}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function BlogBox({ category, content, number }) {
  return (
    <div className="flex flex-col border-t border-dark-blue max-w-[520px]">
      <p className="pt-[56px]">{category.toUpperCase()}</p>
      <p className=" flex-1 font-[600] md:text-[32px] pt-[24px]">{content}</p>
      <p className="font-spaceGrotesk font-[700] text-4xl md:text-[50px] pt-[80px]">
        {number}
      </p>
    </div>
  )
}
