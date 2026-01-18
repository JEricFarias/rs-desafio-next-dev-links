/** biome-ignore-all lint/suspicious/noArrayIndexKey: it the olnly way I have to identify the key right now */
import type { FC } from "react";
import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";

import { Icon } from "@/components/Icon";

/**
 * Props for `SocialMedias`.
 */
export type SocialMediasProps = SliceComponentProps<Content.SocialMediasSlice>;

/**
 * Component for "SocialMedias" Slices.
 */
const SocialMedias: FC<SocialMediasProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full flex gap-4 items-center justify-center p-6"
    >
      {slice.primary.social_medias.map((media, i) => (
        <Icon key={`social-media-${i}`} field={media.link} />
      ))}
    </section>
  );
};

export default SocialMedias;
