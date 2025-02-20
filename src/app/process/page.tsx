import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Analyse & Strategie" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Wir arbeiten eng mit unseren Kunden zusammen, um ihre{' '}
          <strong className="font-semibold text-neutral-950">Bedürfnisse </strong>
          und Ziele zu verstehen. Dabei tauchen wir tief in ihre Abläufe ein, um
          ein umfassendes Verständnis für ihr Geschäft und seine Dynamiken zu entwickeln.
        </p>
        <p>
          Unser Team analysiert bestehende Prozesse, identifiziert Optimierungspotenziale
          und bewertet technologische sowie betriebliche Anforderungen. Dabei betrachten
          wir alle relevanten Aspekte – von internen Workflows bis hin zur digitalen Infrastruktur.
        </p>
        <p>
          Nach Abschluss der Analyse liefern wir eine umfassende{' '}
          <strong className="font-semibold text-neutral-950">Strategie </strong>
          mit klaren Handlungsempfehlungen und einer transparenten Kostenübersicht.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Bestandteile dieser Phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Detaillierte Bedarfsanalysen</TagListItem>
        <TagListItem>Machbarkeitsstudien</TagListItem>
        <TagListItem>Technische Evaluierungen</TagListItem>
        <TagListItem>Mitarbeiter- und Stakeholder-Umfragen</TagListItem>
        <TagListItem>Proof-of-Concept</TagListItem>
        <TagListItem>Strukturelle und wirtschaftliche Bewertungen</TagListItem>
      </TagList>
    </Section>
  )

}

function Build() {
  return (
    <Section title="Entwicklung & Umsetzung" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Auf Basis der Analysephase erstellen wir eine detaillierte Roadmap für
          jedes Produkt und setzen gezielt die nächsten Schritte zur Umsetzung um.
          Unsere Entwicklungsprozesse sind klar strukturiert, effizient und darauf
          ausgerichtet, hochwertige Lösungen zu liefern.
        </p>
        <p>
          Jeder Kunde erhält einen dedizierten Key Account Manager, der als zentrale
          Ansprechperson dient und eine transparente Kommunikation während der gesamten
          Projektlaufzeit sicherstellt. Unser Team arbeitet eng mit den Kunden
          zusammen, um Anforderungen bestmöglich zu erfüllen und kontinuierlich
          Fortschritt zu gewährleisten.
        </p>
        <p>
          Unser Entwicklungsprozess ist agil und flexibel, sodass Anpassungen und
          Optimierungen effizient integriert werden können. Regelmäßige Updates und
          strukturierte Feedbackschleifen sorgen dafür, dass unsere Kunden stets
          den Überblick behalten und aktiv in den Prozess eingebunden sind.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Steve Jobs', role: 'Visionary & Co-founder of Apple Inc.' }}
        className="mt-12"
      >
        Qualität ist wichtiger als Quantität. Ein Home-Run ist besser als zwei Doppel.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Bereitstellung & Go-Live" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Sobald die Entwicklung abgeschlossen ist, begleiten wir den gesamten{' '}
          <strong className="font-semibold text-neutral-950">Go-Live-Prozess </strong>,
          um eine reibungslose Einführung sicherzustellen. Wir sorgen für eine
          fehlerfreie Bereitstellung, umfassende Tests und eine nahtlose Integration in
          bestehende Systeme.
        </p>
        <p>
          Damit unsere Kunden vom ersten Tag an das volle Potenzial ihrer Lösung
          ausschöpfen können, bieten wir gezielte{' '}
          <strong className="font-semibold text-neutral-950">Schulungen </strong> und
          praxisnahe Einführungen an. Ob für Administratoren oder Endnutzer – wir
          stellen sicher, dass jeder bestens vorbereitet ist.
        </p>
        <p>
          Auch nach dem Go-Live sind wir an Ihrer Seite. Mit{' '}
          <strong className="font-semibold text-neutral-950">kontinuierlichem Support </strong>,
          Wartung und Optimierungen begleiten wir unsere Kunden langfristig, um eine
          reibungslose Nutzung und nachhaltige Weiterentwicklung zu gewährleisten.
        </p>

      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Bestandteile dieser Phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Jedes Projekt durchläuft eine umfassende Qualitätsprüfung, um Stabilität,
          Performance und Sicherheit zu gewährleisten.
        </ListItem>
        <ListItem title="Infrastruktur">
          Für höchste Zuverlässigkeit setzen wir auf leistungsstarke Cloud-Technologien
          und skalierbare Architekturen.
        </ListItem>
        <ListItem title="Support">
          Auch nach dem Go-Live stehen wir mit technischem Support und kontinuierlicher
          Weiterentwicklung an Ihrer Seite.
        </ListItem>
      </List>
    </Section>
  )

}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            The first part of any partnership is getting our designer to put
            your logo in our template. The second step is getting them to do the
            colors.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'Wir setzen auf Effizienz, um das Beste für unsere Kunden zu erreichen.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Unser Weg" title="Von der Idee zur Lösung">
        <p>
          Wir setzen auf Effizienz und intelligente Ressourcennutzung, um unseren Kunden ein nahtloses,
          wertvolles und nachhaltiges Erlebnis zu bieten. Durch bewährte Methoden und innovative Lösungen
          schaffen wir digitale Produkte, die begeistern und langfristigen Mehrwert liefern.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
