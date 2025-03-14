import { component$, useContext, useTask$ } from "@qwik.dev/core";
import { Popover } from "./popover";

export const APITable = component$(({ api }) => {
  if (!api) return null;

  const componentName = Object.keys(api)[0];
  console.log(componentName);
  if (!componentName) return null;

  const items = api[componentName];

  console.log(JSON.stringify(api, null, 2));

  return (
    <div class="overflow-x-auto">
      {items.map((item) => {
        const componentData = Object.entries(item)[0];
        const [itemName] = componentData;

        return (
          <div key={itemName}>
            <>
              <Popover.Trigger>Details</Popover.Trigger>
              <Popover.Panel>ddd</Popover.Panel>
            </>
          </div>
        );
      })}
    </div>
  );
});

export const DummyComp = component$(() => {
  return <div>hey</div>;
});
