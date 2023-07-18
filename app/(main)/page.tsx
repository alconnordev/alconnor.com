import Image from 'next/image'
import { Card } from '~/components/Card'
import { Profile } from '~/config/profile'
import { ArrowRight, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export default function BlogHomePage() {
  return (
    <div className="flex gap-3 text-white">
      <Card>
        <div className="relative flex w-full items-center justify-around">
          <Image
            src={Profile.avatar}
            className="inline-block rounded-full"
            alt={'alconnor avatar'}
            priority
            width={80}
            height={80}
          />
          <ArrowRight className="inline-block" width={48} height={48} />
        </div>
        <p>A Portfolio Brimming with Innovation</p>
        <div>Wei Chen • Freelance</div>
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
