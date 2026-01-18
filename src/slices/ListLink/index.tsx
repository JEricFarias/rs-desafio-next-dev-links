import type { FC } from "react";
import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";

import { Button } from "@/components/Button";

/**
 * Props for `ListLink`.
 */
export type ListLinkProps = SliceComponentProps<Content.ListLinkSlice>;

/**
 * Component for "ListLink" Slices.
 */
const ListLink: FC<ListLinkProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="p-6 flex flex-col gap-4 w-full"
    >
      {slice.primary.links_chest.map((link) => (
        <Button key={link.link.text} field={link.link} />
      ))}
    </section>
  );
};

export default ListLink;
