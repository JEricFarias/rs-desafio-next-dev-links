import { asLink } from "@prismicio/client";
import { PrismicNextLink, type PrismicNextLinkProps } from "@prismicio/next";
import type { ReactElement } from "react";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoTwitch,
  IoLogoYoutube,
  IoMdGlobe,
} from "react-icons/io";

import { IoLogoTiktok } from "react-icons/io5";

const IconMap: Record<string, ReactElement> = {
  "github.com": <IoLogoGithub size={24} />,
  "linkedin.com": <IoLogoLinkedin size={24} />,
  "instagram.com": <IoLogoInstagram size={24} />,
  "twitter.com": <IoLogoTwitter size={24} />,
  "x.com": <IoLogoTwitter size={24} />,
  twitch: <IoLogoTwitch size={24} />,
  youtube: <IoLogoYoutube size={24} />,
  tiktok: <IoLogoTiktok size={24} />,
};

export function Icon({ field }: { field: PrismicNextLinkProps["field"] }) {
  function getIcon(url: string | null) {
    const key = Object.keys(IconMap).find((k) =>
      url?.toLocaleLowerCase().includes(k.toLowerCase()),
    );

    return (key && IconMap[key]) || <IoMdGlobe size={24} />;
  }

  return (
    <PrismicNextLink
      field={field}
      className="text-text p-4 transition duration-300 hover:bg-highlight rounded-full"
    >
      {getIcon(asLink(field))}
    </PrismicNextLink>
  );
}
