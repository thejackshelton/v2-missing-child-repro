export const api = {
  "checklist": [
    {
      "Checklist Item": {
        "types": [
          {
            "PublicChecklistItemProps": [
              {
                "comment": "Internal prop for tracking item position in checklist",
                "prop": "_index",
                "type": "number"
              }
            ]
          }
        ]
      }
    },
    {
      "Checklist Root": {
        "types": [
          {
            "PublicChecklistRootProps": [
              {
                "comment": "Internal prop for tracking number of checklist items",
                "prop": "_numItems",
                "type": "number"
              }
            ]
          }
        ],
        "inheritsFrom": "div"
      }
    }
  ],
  "anatomy": [
    {
      "name": "Checklist.Root"
    },
    {
      "name": "Checklist.Item",
      "description": "Internal prop for tracking item position in checklist"
    },
    {
      "name": "Checklist.ItemLabel"
    },
    {
      "name": "Checklist.ItemIndicator"
    },
    {
      "name": "Checklist.ItemTrigger"
    },
    {
      "name": "Checklist.ItemDescription"
    },
    {
      "name": "Checklist.HiddenInput",
      "description": "The checklist hidden input manages multiple checkbox form inputs"
    },
    {
      "name": "Checklist.ErrorMessage"
    },
    {
      "name": "Checklist.SelectAll"
    },
    {
      "name": "Checklist.SelectAllIndicator"
    },
    {
      "name": "Checklist.Label"
    }
  ],
  "keyboardInteractions": [
    {
      "key": "Space",
      "comment":
        "When focus is on a checkbox trigger (ChecklistItemTrigger or ChecklistSelectAll), toggles the checked state"
    },
    {
      "key": "Enter",
      "comment":
        "When focus is on a checkbox trigger (ChecklistItemTrigger or ChecklistSelectAll), toggles the checked state"
    },
    {
      "key": "Tab",
      "comment": "Moves focus to the next checkbox trigger"
    },
    {
      "key": "Shift+Tab",
      "comment": "Moves focus to the previous checkbox trigger"
    }
  ],
  "features": [
    "Select all/unselect all functionality",
    "Mixed state handling for partial selections",
    "Individual item selection tracking",
    "WAI-ARIA checkbox list pattern",
    "Form input integration",
    "Dynamic item state synchronization",
    "Nested accessibility descriptions per item",
    "Independent item state management",
    "Automated item indexing",
    "Context-based state propagation"
  ]
};
