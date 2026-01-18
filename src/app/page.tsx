import { notFound } from "next/navigation";

import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";

import { Container } from "@/components/Container";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home").catch(() => notFound());

  return (
    <Container>
      <SliceZone slices={page.data.slices} components={components} />
    </Container>
  );
}
