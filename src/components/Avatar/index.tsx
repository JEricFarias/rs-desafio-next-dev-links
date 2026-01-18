import type { KeyTextField } from "@prismicio/client";
import { Switch } from "../ui/switch";

export function Avatar({
  children,
  tag,
}: {
  children: React.ReactNode;
  tag: KeyTextField;
}) {
  return (
    <>
      <div className="flex flex-col gap-2 py-6 items-center">
        <figure className="relative overflow-clip w-28 h-28 rounded-full border-2 border-stroke">
          {children}
          <figcaption className="sr-only">Avatar do usuário.</figcaption>
        </figure>

        <p>{tag}</p>
      </div>
      <Switch />
    </>
  );
}
