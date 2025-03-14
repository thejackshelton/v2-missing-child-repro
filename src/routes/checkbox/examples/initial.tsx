import { component$, useStyles$ } from "@qwik.dev/core";
import { Checkbox } from "@kunai-consulting/qwik";
import { LuCheck } from "@qwikest/icons/lucide";

export default component$(() => {
  useStyles$(styles);

  return (
    <Checkbox.Root checked>
      <Checkbox.Trigger class="checkbox-trigger">
        <Checkbox.Indicator class="checkbox-indicator">
          <LuCheck />
        </Checkbox.Indicator>
      </Checkbox.Trigger>
    </Checkbox.Root>
  );
});

// example styles
import styles from "./checkbox.css?inline";
