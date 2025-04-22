import React from 'react'
import style from './Feature.module.css'


const Feature = ({icon,title,desc,call}) => {
  return (
    <div className={style.feature}>
        <div className={style.icon}>{icon}</div>
        <h2 className={style.title}>{title}</h2>
        <p className={style.desc}>{desc}</p>
        <p className={style.call}>{call}</p>
    </div>
  )
}

export default Feature