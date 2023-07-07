import Link from 'next/link'
import { Menu } from '~/components/icon/Menu'
import { navigationItems } from '~/config/nav'

export function Header() {
  return (
    <header
      style={{
        transform: 'perspective(1200px)',
        opacity: 1,
      }}
      className="sticky top-0 z-[4] mx-auto h-auto w-full max-w-[1200px] flex-none"
    >
      <div
        style={{
          opacity: 1,
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(15, 15, 15, 0.92)',
        }}
        className="relative flex h-min w-full flex-row flex-nowrap items-center gap-0 px-8 py-8"
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            opacity: 1,
          }}
          className="relative z-[1] flex h-8 w-full flex-none flex-nowrap items-center justify-center gap-3 overflow-visible p-0"
        >
          <Link
            href={'/'}
            className="relative flex w-[1px] flex-shrink flex-grow basis-0 flex-nowrap items-center gap-[10px] p-0 no-underline"
          >
            <div
              style={{
                outline: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                flexShrink: 0,
                transform: 'none',
                opacity: 1,
              }}
              className="relative h-auto w-auto flex-none whitespace-pre"
            >
              <p className="text-center text-2xl font-medium text-white">
                <span
                  style={{
                    color: '#772af4',
                  }}
                >
                  .
                </span>
                alconnor
              </p>
            </div>
            <div className="relative flex h-min flex-none flex-row flex-nowrap items-center justify-end gap-2 overflow-visible px-[10px] py-1 ">
              <div
                style={{
                  outline: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  flexShrink: 0,
                  color: 'rgb(132, 132, 132)',
                  transform: 'none',
                  opacity: 1,
                }}
                className="relative h-auto w-auto flex-none whitespace-pre bg-[#1A1A1A] px-[8px] py-1 after:pointer-events-none after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-lg after:border after:border-[#292929] after:px-4 after:py-2 after:content-['']"
              >
                <p className="text-center text-xs text-[rgb(132,132,132)] ">
                  Portfolio
                </p>
              </div>
            </div>
          </Link>

          <div
            style={{
              opacity: 1,
            }}
            className="relative flex w-min flex-none flex-row flex-nowrap items-center gap-[10px] overflow-hidden p-0"
          >
            {navigationItems.map((menu, index) => (
              <div
                className="relative hidden h-auto w-auto flex-none opacity-100 md:inline-block"
                key={index}
              >
                <div className="contents">
                  <Link
                    className="relative flex h-min flex-row
                  flex-nowrap items-center justify-center gap-2 overflow-hidden rounded-3xl border-[#292929] bg-[#1A1A1A] px-4 py-[6]
                  no-underline opacity-100 will-change-transform
                  "
                    href={menu.href}
                  >
                    <div
                      className="relative flex h-auto w-auto flex-none flex-shrink-0 flex-col justify-start whitespace-pre px-[8px] py-1
                      opacity-100 outline-none
                  after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-[inherit] after:border-0 after:border-[#292929] after:content-['']
                  "
                    >
                      <p className="text-white">{menu.text}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
            <button className="mr-2 flex h-[32px] w-[32px] items-center justify-center rounded-full border border-[#292929] bg-[#1A1A1A] p-2 active:bg-gray-400/20 md:hidden">
              <Menu className="inline-block  h-[20px] w-[20px] text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
