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
} from "@navikt/ds-react";

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
];

export default function Home() {
  const [nummer, setNummer] = useState<number | null>(null);

  const trekk = () => {
    setNummer(Math.floor(Math.random() * artikkel.length));
  };

  return (
    <Page>
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
