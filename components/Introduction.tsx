import clsx from 'clsx'
import Image from 'next/image'

import avatarImage from '~/assets/profile/avatar.png'
import { Profile } from '~/config/profile'

import { Card } from './Card'

export function Introduction(props: { className?: string }) {
  return (
    <div
      className={clsx(
        'flex flex-row items-center justify-center',
        props.className
      )}
    >
      <Card className="w-[318px] items-center">
        <Image
          src={avatarImage}
          alt={Profile.name}
          sizes={'4rem'}
          className={clsx(
            'h-[296px] w-[296px]  bg-zinc-100 object-cover dark:bg-zinc-800'
          )}
          priority
        />
        <p>build what you want</p>
      </Card>
      <div className="ml-9 flex w-80 flex-col justify-self-center p-3">
        <p className="block text-lg text-white">Alconnor Taylor</p>
        <div className="text-[#858585]">
          A full-stack developer who is passionate about front-end development
          and open-source projects🔧🌐. In the past, I focused on developing
          front-end components and basic libraries🛠️💻, but now I am shifting my
          focus towards product development🚀💡. I aspire to become a remote
          worker🌍 or a full-time open-source contributor💪, pursuing my
          creativity and dreams. Constantly learning and exploring📚🚀, aiming
          for greater achievements🏆💫. Thank you!🙏
        </div>
      </div>
    </div>
  )
}
