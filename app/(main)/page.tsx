import Image from 'next/image'
import { Card } from '~/components/Card'
import { Profile } from '~/config/profile'
import { ArrowRight, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import clsx from 'clsx'
import Link from 'next/link'
import avatarImage from '~/assets/profile/avatar.png'

export default function BlogHomePage() {
  return (
    <div className="flex gap-3 text-white">
      <Card>
        <div className="relative flex w-full items-center justify-between">
          <Link
            href="/"
            aria-label="Home"
            className={clsx('pointer-events-auto')}
          >
            {/* https://nextjs.org/docs/app/building-your-application/optimizing/images#local-images */}
            <Image
              src={avatarImage}
              alt={Profile.name}
              sizes={'2.5rem'}
              className={clsx(
                'h-20 w-20 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800'
              )}
              priority
            />
          </Link>
          <ArrowRight className="inline-block" width={48} height={48} />
        </div>
        <p className="text-5xl">A Portfolio Brimming with Innovation</p>
        <div className="mt-5 text-[#525252]">Wei Chen • Freelance</div>
      </Card>

      <div className="flex flex-col">
        <Card>
          <div className="flex">
            <div>Title</div>
            <h2>Product Designer</h2>
          </div>
          <div>123</div>
        </Card>

        <div className="my-3 flex justify-around">
          <Card className="w-fit">
            <Twitter />
          </Card>
          <Card className="w-fit">
            <Facebook />
          </Card>
          <Card className="w-fit">
            <Youtube />
          </Card>
          <Card className="w-fit">
            <Instagram />
          </Card>
        </div>

        <Card>
          <div className="flex">
            <div>Based in</div>
            <div>Manhattan, NY</div>
          </div>
          <div>Icon</div>
        </Card>
      </div>

      <Card>234</Card>
    </div>
  )
}
