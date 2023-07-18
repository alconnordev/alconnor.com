import { Container } from '~/components/Container'
import { Header } from './Header'
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex h-min min-h-full w-auto flex-col flex-nowrap items-center justify-start gap-0 overflow-visible p-0 ">
      <Header />
      <Container className="relative">{children}</Container>
    </div>
  )
}
