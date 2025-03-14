import { component$, useStyles$ } from "@qwik.dev/core";
import { Checkbox } from "@kunai-consulting/qwik";

export default component$(() => {
  useStyles$(styles);

  return (
    <Checkbox.Root>
      <Checkbox.Trigger class="checkbox-trigger">
        <Checkbox.Indicator class="checkbox-indicator">
          <LuCheck />
        </Checkbox.Indicator>
      </Checkbox.Trigger>
    </Checkbox.Root>
  );
});

import { LuCheck } from "@qwikest/icons/lucide";
// example styles
import styles from "./checkbox.css?inline";
