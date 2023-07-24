import clsx from 'clsx'
import {
  ArrowRight,
  Facebook,
  Instagram,
  MapPin,
  Palmtree,
  Twitter,
  Youtube,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import avatarImage from '~/assets/profile/avatar.png'
import { Card } from '~/components/Card'
import { Introduction } from '~/components/Introduction'
import { SectionTitle } from '~/components/SectionTitle'
import { Profile } from '~/config/profile'

export default function BlogHomePage() {
  return (
    <>
      <div className="flex gap-3 text-white">
        <Card className="h-[318px]">
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
          <div className="mt-5 text-[#525252]">
            Alconnor Taylor • Full Stack developer
          </div>
        </Card>

        <div className="flex flex-col justify-between">
          <Card className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="text-[#525252]">Full Stack&nbsp;</div>
              <h2 className="block text-xl text-white">{'<Developer />'}</h2>
            </div>
            <Palmtree />
          </Card>

          <div className="flex justify-around">
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

          <Card className="flex items-center justify-between">
            <div className="flex flex-col">
              <div>Based in</div>
              <div>Guangzhou, Guangdong</div>
            </div>
            <MapPin></MapPin>
          </Card>
        </div>
        <Card>
          <div>
            <div>Recently</div>
          </div>
        </Card>
      </div>
      <SectionTitle>
        <h2>Introduction</h2>
      </SectionTitle>
      <Introduction className={'mt-12'}></Introduction>
      <div></div>
    </>
  )
}
