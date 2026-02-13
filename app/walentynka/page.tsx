import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { WalentynkaButtons } from "./walentynka-buttons"

const ALLOWED_HOSTS = ["bolsia.pl", "www.bolsia.pl"]
const DEV_HOSTS = ["localhost", "127.0.0.1"]

export default async function WalentynkaPage() {
  const headersList = await headers()
  const host = headersList.get("host")?.split(":")[0] ?? ""

  const isAllowed =
    ALLOWED_HOSTS.includes(host) ||
    (process.env.NODE_ENV === "development" && DEV_HOSTS.includes(host))

  if (!isAllowed) {
    redirect("/")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-foreground mb-12 max-w-2xl [font-family:var(--font-cormorant)]">
        Zostaniesz moją Walentynką?
      </h1>
      <WalentynkaButtons />
    </div>
  )
}
