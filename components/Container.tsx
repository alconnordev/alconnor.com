import React from 'react'
import clsx from 'clsx'

export const Container = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(function Container({ className, children, ...props }, ref) {
  return (
    <div ref={ref} className={clsx('mx-auto max-w-7xl', className)} {...props}>
      {children}
    </div>
  )
})
