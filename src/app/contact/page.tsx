import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-hidden checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Projektanfragen
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Unternehmen"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Telefonnummer" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Nachricht" name="message" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="25.000€ – 100.000€" name="budget" value="25" />
                <RadioInput label="100.000€ – 250.000€" name="budget" value="100" />
                <RadioInput label="250.000€ – 1 mio.€" name="budget" value="250" />
                <RadioInput label="Mehr als 1 mio.€" name="budget" value="1000" />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Let’s work together
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Unser Büro
      </h2>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Schreiben Sie uns eine Email
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Kontakt', 'info@solidpulse.dev'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Impressum
        </h2>
        <div className="mt-6 text-sm text-neutral-600 space-y-4">
          <p><strong>Angaben gemäß § 5 TMG</strong></p>
          <p>SolidPulse Software UG (haftungsbeschränkt)<br />
            Robert-Koch-Straße 16b<br />
            82031 Grünwald<br />
            Deutschland</p>

          <p><strong>Vertreten durch</strong></p>
          <p>Felix Ochsenkühn (Geschäftsführer)</p>

          <p><strong>Kontakt</strong></p>
          <p>Telefon: +49 162 2603976<br />
            E-Mail: <Link href="mailto:info@solidpulse.dev" className="hover:text-neutral-950">info@solidpulse.dev</Link></p>

          <p><strong>Registereintrag</strong></p>
          <p>Eintragung im Handelsregister.<br />
            Registergericht: Amtsgericht 80333 München<br />
            Registernummer: HRB: 287760</p>

          <p><strong>Umsatzsteuer-ID</strong></p>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
            DE366917133</p>

          <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</strong></p>
          <p>SolidPulse Software UG (haftungsbeschränkt)<br />
            Robert-Koch-Straße 16b<br />
            82031 Grünwald<br />
            Deutschland</p>

          <p><strong>Datenschutzerklärung</strong></p>
          <p>Informationen zum Umgang mit Ihren personenbezogenen Daten entnehmen Sie bitte unserer <Link href="/datenschutz" className="hover:text-neutral-950">Datenschutzerklärung</Link>.</p>

          <p><strong>Haftung für Inhalte</strong></p>
          <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich...</p>

          <p><strong>Haftung für Links</strong></p>
          <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben...</p>

          <p><strong>Online-Streitbeilegung (OS)</strong></p>
          <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter <Link href="https://ec.europa.eu/consumers/odr/" className="text-blue-600 hover:text-blue-800">
            diesem Link </Link> finden.</p>
        </div>
      </Border>
    </FadeIn >
  )
}

export const metadata: Metadata = {
  title: 'Kontakt aufnehmen',
  description: 'Gemeinsam Ideen verwirklichen – wir sind gespannt auf Ihr Projekt!'
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Kontakt aufnehmen" title="Gemeinsam Ideen verwirklichen">
        <p>Wir sind gespannt auf Ihr Projekt!</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
