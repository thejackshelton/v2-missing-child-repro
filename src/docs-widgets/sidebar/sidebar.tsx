import { component$ } from "@qwik.dev/core";
import { Link } from "@qwik.dev/router";

export const Sidebar = component$(() => {
  return (
    <>
      <Link href="/checkbox">Checkbox</Link>
      <Link href="/checklist">Checklist</Link>
    </>
  );
});
