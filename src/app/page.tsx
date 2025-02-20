import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'

import spLogoYellow from '@/images/products/logoYellow.svg'
import spLogoBlue from '@/images/products/logoBlue.svg'

import tum from '@/images/university/tum.svg'
import bocconi from '@/images/university/bocconi.svg'
import kit from '@/images/university/kit.svg'

import logoSolidPulse from '@/images/products/logoPurple.svg'

import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

const universities = [
  ['Università Bocconi', bocconi],
  ['Technische Universität München', tum],
  ['Karlsruher Institut für Technologie', kit],
]

const products = [
  ['SPEvent', spLogoBlue],
  ['SPData', spLogoYellow],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Unser Team besteht aus Spitzenkräften der renommiertesten Universitäten Europas.
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {universities.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image
                    src={logo}
                    alt={client}
                    width={300} // Increase size
                    height={160}
                    className="w-60 h-32 object-contain mx-auto"
                    unoptimized
                  />

                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Technologische Exzellenz für morgen"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Für uns ist Technologie der Schlüssel zu den größten Herausforderungen unserer Zeit.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <Link href={caseStudy.href} className="w-full">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <h3 className="flex items-center gap-4">
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                    <span className="text-lg font-semibold text-neutral-950">
                      {caseStudy.client}
                    </span>
                  </h3>
                  <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                    <time dateTime={caseStudy.date.split('-')[0]} className="font-semibold">
                      {caseStudy.date.split('-')[0]}
                    </time>
                    <span className="text-neutral-300" aria-hidden="true">
                      /
                    </span>
                    <span>Produkt</span>
                  </p>
                  <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                    {caseStudy.title}
                  </p>
                  <p className="mt-4 text-base text-neutral-600">
                    {caseStudy.description}
                  </p>
                </article>
              </Link>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>


    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Wir helfen Ihnen, neue Chancen zu erkennen, zu erkunden und zu nutzen."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web Entwicklung">
              Wir sind Experten im Web Development und entwickeln leistungsstarke,
              maßgeschneiderte Lösungen, die höchste Standards in Design, Performance und Funktionalität erfüllen.
            </ListItem>
            <ListItem title="Schnittstellen & Integration">
              Wir entwickeln und integrieren vielseitige Schnittstellen, um Systeme nahtlos zu verknüpfen,
              Daten effizient auszutauschen und reibungslose Prozesse zu gewährleisten.
            </ListItem>
            <ListItem title="IT Beratung">
              Wir bieten fundierte IT-Beratung und unterstützen Sie dabei, maßgeschneiderte digitale Strategien zu entwickeln,
              Technologien optimal zu nutzen und nachhaltige Lösungen für Ihr Unternehmen zu schaffen.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Wir sind ein innovatives Startup aus München und entwickeln maßgeschneiderte Softwarelösungen – von der technischen Beratung bis zum Deployment.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
            Innovation beginnt mit dem richtigen Impuls.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Wir sind ein innovatives Startup aus München und entwickeln maßgeschneiderte Softwarelösungen –
            von der ersten Idee bis zur erfolgreichen Umsetzung.
            Mit unserer Expertise begleiten wir Unternehmen durch den gesamten digitalen Transformationsprozess.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Felix Ochsenkühn', logo: logoSolidPulse }}
      >
        Gute Software entsteht nicht nur durch Code, sondern durch das tiefe Verständnis der Bedürfnisse unserer Kunden.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
