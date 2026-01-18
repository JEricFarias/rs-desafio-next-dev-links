import { PrismicNextLink, type PrismicNextLinkProps } from "@prismicio/next";

export function Button({ field }: { field: PrismicNextLinkProps["field"] }) {
  return (
    <PrismicNextLink field={field} target="_blank">
      <div className="transform duration-300 bg-surface border border-stroke px-6 py-4 hover:bg-surface-hover rounded-lg flex justify-center text-center">
        {field?.text}
      </div>
    </PrismicNextLink>
  );
}
