import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import Pitt from '@/images/team/Pitt.jpg'
import Oxxi from '@/images/team/Oxxi.jpg'
import Constantin from '@/images/team/Constantin.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Unsere Kultur"
        title="Ein Ort, an dem Ideen wachsen und Talente erblühen."
        invert
      >
        <p>
          Wir teilen nicht nur Wissen, sondern auch Begeisterung für das, was wir tun.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Vertrauen" invert>
            Wir glauben an Eigenverantwortung und Flexibilität – was zählt, sind Ergebnisse, nicht starre Arbeitszeiten.
          </GridListItem>
          <GridListItem title="Talentförderung" invert>
          Wir glauben daran, dass jeder sein volles Potenzial entfalten kann – mit 
          Freiraum, Eigenverantwortung und den richtigen Herausforderungen.
          </GridListItem>
          <GridListItem title="Wertschätzung" invert>
            Jeder in unserem Team trägt mit individuellen Stärken bei – genau das macht uns einzigartig.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Geschäftsleitung',
    people: [
      {
        name: 'Felix Ochsenkühn',
        role: 'Founder / CEO',
        image: { src: Oxxi },
      },
    ],
  },
  {
    title: 'Entwicklungsteam',
    people: [
      {
        name: 'Constantin Rosenhahn',
        role: 'Senior Developer',
        image: { src: Constantin },
      },
      {
        name: 'Pitt Leitermann',
        role: 'Senior Developer',
        image: { src: Pitt },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Jede Lösung beginnt mit Zuhören – wir verstehen Ihre Bedürfnisse und entwickeln passgenaue Technologien.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="Über uns" title="Zusammen für smarte Lösungen">
        <p>
          SolidPulse wurde von einem Team gegründet, das erkannte, dass echte digitale
          Exzellenz durch Zusammenarbeit und smarte Lösungen entsteht. Seit Beginn verfolgen wir
          den Ansatz: maßgeschneiderte Software,
          transparente Prozesse und ein starkes Miteinander – für innovative Ergebnisse, die begeistern.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Bei SolidPulse sind wir mehr als nur Kollegen – wir sind ein Team mit einer
            gemeinsamen Vision. Wir legen Wert auf eine offene, kreative Arbeitskultur, in der sich jeder
            entfalten kann. Flexibilität, Vertrauen und der Austausch neuer Ideen stehen für uns an erster Stelle.
            Gemeinsam wachsen wir, entwickeln uns weiter und schaffen wegweisende Lösungen.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="3" label="Mitabeiter" />
          <StatListItem value="6 Monate" label="Ø Projektdauer" />
          <StatListItem value="2024" label="Gründungsjahr" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Unser Blog"
        intro="Ein Blick hinter die Kulissen: In unserem Blog teilen wir Einblicke in unsere Entwicklung, 
        technologische Trends und die Ideen, die unsere Software antreiben."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
