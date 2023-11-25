import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function Page() {
  return (
    <section className="flex w-full max-w-[980px] flex-col  items-start gap-2 px-4 py-8 md:pt-12">
      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
        Saas Boilerplate
      </h1>
      <p>
        A Next.js starter kit for building modern SaaS applications with
        TypeScript, Tailwind CSS, and Serverless.
      </p>
      <div className="flex gap-2">
        <Button>Get Started</Button>

        <Button variant="outline" asChild>
          <Link
            href={"https://github.com/roberthgnz/saas-boilerplate"}
            target="_blank"
          >
            <Icons.gitHub className="mr-2 h-5 w-5" />
            GitHub
          </Link>
        </Button>
      </div>
    </section>
  )
}
