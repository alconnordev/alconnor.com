export type IconProps = React.SVGAttributes<SVGElement>

export const Menu = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      focusable="false"
      fill="var(--token-06953b5a-453f-457c-b76d-01fb16b803ec, rgb(133, 133, 133))"
      {...props}
      style={{
        color:
          'color: var(--token-06953b5a-453f-457c-b76d-01fb16b803ec, rgb(133, 133, 133))',
      }}
    >
      <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
    </svg>
  )
}
