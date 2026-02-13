import { ForceLightTheme } from "./force-light-theme"

export default function WalentynkaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ForceLightTheme />
      {children}
    </>
  )
}
