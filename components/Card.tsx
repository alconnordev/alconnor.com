import clsx from 'clsx'
import { PropsWithChildren } from 'react'
interface CardProps {
  className?: string
}
export function Card(props: PropsWithChildren<CardProps>) {
  return (
    <div
      className={clsx(
        'relative w-96 rounded-3xl border border-[#292929] bg-[#1a1a1a] p-6 shadow-md',
        props.className
      )}
    >
      {props.children}
    </div>
  )
}
