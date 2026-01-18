import type { FC } from "react";
import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";

import { PrismicNextImage } from "@prismicio/next";

import { Avatar as MyAvatar } from "@/components/Avatar";

/**
 * Props for `Avatar`.
 */
export type AvatarProps = SliceComponentProps<Content.AvatarSlice>;

/**
 * Component for "Avatar" Slices.
 */
const Avatar: FC<AvatarProps> = ({ slice }) => {
  return (
    <MyAvatar tag={slice.primary.tag_name}>
      <PrismicNextImage field={slice.primary.avatar} />
    </MyAvatar>
  );
};

export default Avatar;
