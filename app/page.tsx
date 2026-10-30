"use client";

import { useState } from "react";
import {
  GuidePanel,
  Button,
  Link,
  Heading,
  BodyShort,
  Page,
  VStack,
  InternalHeader,
} from "@navikt/ds-react";
import { NavLogo } from "./NavLogo";

const artikkel = [
  {
    tittel: "Brukertesting i Nav testlab",
    lenke:
      "https://aksel.nav.no/god-praksis/artikler/brukertesting-i-nav-testlab",
  },
  {
    tittel: "Test struktur med tretesting",
    lenke:
      "https://aksel.nav.no/god-praksis/artikler/test-struktur-med-tretesting",
  },
  {
    tittel: "Huskeliste for samtykker",
    lenke: "https://aksel.nav.no/god-praksis/artikler/huskeliste-for-samtykker",
  },
  {
    tittel: "Etikk når du planlegger innsiktsarbeid",
    lenke:
      "https://aksel.nav.no/god-praksis/artikler/etikk-nar-du-planlegger-innsiktsarbeid",
  },
  {
    tittel: "Etikk når du gjennomfører innsiktsarbeid",
    lenke:
      "https://aksel.nav.no/god-praksis/artikler/etikk-nar-du-gjennomforer-innsiktsarbeid",
  },
  {
    tittel: "Etikk når du analyserer og formidler brukerinnsikt",
    lenke:
      "https://aksel.nav.no/god-praksis/artikler/etikk-nar-du-analyserer-og-formidler-brukerinnsikt",
  },
  {
    tittel: "Tips til hvordan du stiller beskrivende intervjuspørsmål",
    lenke:
      "https://aksel.nav.no/god-praksis/artikler/tips-til-hvordan-stille-beskrivende-intervjusporsmal",
  },
  {
    tittel: '"Test min løsning"',
    lenke: "https://aksel.nav.no/god-praksis/artikler/test-min-losning",
  },
  {
    tittel: "Brukerinvolvering av egne ansatte",
    lenke:
      "https://aksel.nav.no/god-praksis/artikler/brukerinvolvering-av-egne-ansatte",
  },
  {
    tittel: "Slik gjør du en lavterskel brukertest av tekst",
    lenke:
      "https://aksel.nav.no/god-praksis/artikler/slik-gjor-du-en-lavterskel-brukertest-av-tekst",
  },
  {
    tittel: "Test skisser og prototyper umoderert",
    lenke: "https://aksel.nav.no/god-praksis/artikler/umoderert-test",
  },
  {
    tittel: "Test skisser og prototyper med UXtweak",
    lenke: "https://aksel.nav.no/god-praksis/artikler/uxtweak",
  },
  {
    tittel: "Oppdag innholdsgruppering med kortsortering",
    lenke:
      "https://aksel.nav.no/god-praksis/artikler/oppdag-innholdsgruppering-med-kortsortering",
  },
  {
    tittel: "Samle inn brukerinnsikt med Skyra",
    lenke:
      "https://aksel.nav.no/god-praksis/artikler/samle-inn-brukerinnsikt-med-skyra",
  },
  {
    tittel: "Innsiktsmal til observatører",
    lenke:
      "https://aksel.nav.no/god-praksis/artikler/innsiktsmal-til-observatorer",
  },
  {
    tittel: "Brukermedvirkning i Arbeids- og velferdsdirektoratet",
    lenke:
      "https://aksel.nav.no/god-praksis/artikler/brukermedvirkning-i-arbeids-og-velferdsdirektoratet",
  },
  {
    tittel: "Rutine for lagring av innsiktsdata",
    lenke:
      "https://aksel.nav.no/god-praksis/artikler/rutine-for-lagring-av-innsiktsdata",
  },
  {
    tittel: "Mål bruk og tilfredshet",
    lenke: "https://aksel.nav.no/god-praksis/artikler/måle-bruk-og-tilfredshet",
  },
  {
    tittel: "Finn brukernes viktigste oppgaver med toppoppgavemetoden",
    lenke: "https://aksel.nav.no/god-praksis/artikler/toppoppgavemetoden",
  },
  {
    tittel: "Måle brukeradferd med Innblikk",
    lenke:
      "https://aksel.nav.no/god-praksis/artikler/male-brukeradferd-med-innblikk",
  },
];

export default function Home() {
  const [nummer, setNummer] = useState<number | null>(null);

  const trekk = () => {
    setNummer(Math.floor(Math.random() * artikkel.length));
  };

  return (
    <Page
      footer={
        <div
          style={{ background: "#c30000", color: "white", padding: "1.5rem 0" }}
        >
          <Page.Block as="footer" width="2xl" gutters>
            <BodyShort>laget av praksis elev hos NAV, Boktober 2026</BodyShort>
          </Page.Block>
        </div>
      }
    >
      <InternalHeader>
        <InternalHeader.Title as="div">
          <NavLogo height={53} style={{ color: "#c30000" }} />
        </InternalHeader.Title>
      </InternalHeader>

      <Page.Block width="md" gutters>
        <VStack gap="space-24" align="center" paddingBlock="space-48">
          <Heading level="1" size="xlarge">
            Boktober: Hva skal jeg lese?
          </Heading>

          <BodyShort>
            Trykk på knappen og få forslag til en Brukerinnsikt-artikkel.
          </BodyShort>

          <Button onClick={trekk}>Foreslå en artikkel</Button>

          <GuidePanel>
            {nummer === null ? (
              "Trykk på knappen for å få et forslag!"
            ) : (
              <Link href={artikkel[nummer].lenke}>
                {artikkel[nummer].tittel}
              </Link>
            )}
          </GuidePanel>
        </VStack>
      </Page.Block>
    </Page>
  );
}
