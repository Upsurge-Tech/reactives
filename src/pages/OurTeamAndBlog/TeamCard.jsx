
import styles from './style.module.css'
import { useState } from 'react'
import whiteArrow from './assets/white-arrow.svg'

export default function TeamCard({ title, name, link, img }) {

  const [hover, setHover] = useState(false)

  //handles size increase on hover
  let cardClass = `relative h-[400px] md:h-[586px] overflow-hidden rounded-[20px] ${styles['transition']} `
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