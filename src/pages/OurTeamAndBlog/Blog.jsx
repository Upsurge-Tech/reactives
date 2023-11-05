import styles from './style.module.css'
import { useState } from 'react'
import longArrow from './assets/long-arrow.svg'
import rightArrow from './assets/right-arrow.svg'
import leftArrow from './assets/left-arrow.svg'

import BlogBox from './BlogBox'

export default function Blog() {
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
    },
  ]

  const hasLeft = index > 0
  const hasRight = index < blogs.length - 2
  //go right or left if possible
  const goRight = () => hasRight && setIndex(index + 2)
  const goLeft = () => hasLeft && setIndex(index - 2)

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
              {blogs[index + 1] && BlogBox(blogs[index + 1])}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
