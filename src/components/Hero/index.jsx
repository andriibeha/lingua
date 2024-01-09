import React from 'react'
import book from '../../assets/book.png'
import cup from '../../assets/cup.png'
import gift from '../../assets/gift.png'
import girl from '../../assets/hero_girl.png'
import playbtn from '../../assets/hero_playbttn.png'
import registr from '../../assets/hero_registr.png'
import megaphone from '../../assets/megaphon.png'
import Logo from '../Logo'
import s from './hero.module.css'

const Hero = () => {
	return (
		<section className={`${s.hero} ${s.hero_bg}`}>
			<div className={s.hero__logo__container}>
				<div className={s.hero__wrap}>
					<Logo />
					<p className={s.hero__logo__text}>Английский онлайн</p>
				</div>
			</div>

			<p className='hero__text'>в онлайн-формате</p>
			<h2 className='hero__subtitle'>прокачай свой</h2>
			<h1 className='hero__title'>english</h1>

			<img src={girl} alt='girl' className='hero__img-girl' />
			<img src={playbtn} alt='play button' className='hero__img-playbtn' />
			<img src={registr} alt='registr' className='hero__img-registr' />

			<a href='/' className='hero__btn'>
				зарегистрироваться
			</a>

			<ul className='hero__grid'>
				<li className='hero__grid-item'>
					<img
						src={megaphone}
						alt='megaphone'
						className='hero__grid-megaphone'
					/>
				</li>

				<li className='hero__grid-item'>
					<img src={cup} alt='megaphone' className='hero__grid-megaphone' />
				</li>

				<li className='hero__grid-item'>
					<img src={book} alt='megaphone' className='hero__grid-megaphone' />
				</li>

				<li className='hero__grid-item'>
					<img src={gift} alt='megaphone' className='hero__grid-megaphone' />
				</li>
			</ul>
		</section>
	)
}

export default Hero
