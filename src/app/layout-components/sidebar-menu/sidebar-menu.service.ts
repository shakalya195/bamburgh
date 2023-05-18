import { Injectable } from '@angular/core';

interface MenuItem {
    title: string;
    type: string;
    badge?: {
        class: string;
        text: string;
    };
    link?: string;
    active?: boolean;
    icon?: string;
    submenus?: MenuItem[];
}

@Injectable({
    providedIn: 'root'
})
export class SidebarMenuService {

    menus: MenuItem[] = [
  {
    "title": "Navigation menu",
    "type": "header"
  },
  {
    "title": "Dashboards",
    "type": "dropdown",
    "icon": "<i class=\"pe-7s-safe\"> </i>",
    "submenus": [
      {
        "title": "Default",
        "type": "simple",
        "link": "/dashboard-default"
      },
      {
        "title": "Analytics",
        "type": "simple",
        "link": "/dashboard-analytics"
      },
      {
        "title": "Sales Management",
        "type": "simple",
        "link": "/dashboard-sales"
      },
      {
        "title": "Reports",
        "type": "simple",
        "badge": {
          "class": "badge badge-danger",
          "text": "NEW"
        },
        "link": "/dashboard-reports"
      },
      {
        "title": "Real Estate",
        "type": "simple",
        "link": "/dashboard-real-estate"
      },
      {
        "title": "Server Status",
        "type": "simple",
        "link": "/dashboard-server-status"
      },
      {
        "title": "Projects",
        "type": "simple",
        "link": "/dashboard-projects"
      },
      {
        "title": "Helpdesk",
        "type": "simple",
        "badge": {
          "class": "badge badge-first",
          "text": "HOT"
        },
        "link": "/dashboard-helpdesk"
      },
      {
        "title": "Customers",
        "type": "simple",
        "link": "/dashboard-customers"
      },
      {
        "title": "Cryptocurrency",
        "type": "simple",
        "link": "/dashboard-cryptocurrency"
      },
      {
        "title": "CRM Manager",
        "type": "simple",
        "badge": {
          "class": "badge badge-warning",
          "text": "65"
        },
        "link": "/dashboard-crm-manager"
      },
      {
        "title": "Content Statistics",
        "type": "simple",
        "link": "/dashboard-content"
      }
    ]
  },
  {
    "title": "Applications",
    "type": "dropdown",
    "icon": "<i class=\"pe-7s-network\"></i>",
    "badge": {
      "class": "badge badge-success",
      "text": "12"
    },
    "submenus": [
      {
        "title": "Calendar",
        "type": "simple",
        "link": "/applications-calendar"
      },
      {
        "title": "Chat",
        "type": "simple",
        "link": "/applications-chat"
      },
      {
        "title": "Contacts",
        "type": "simple",
        "link": "/applications-contacts"
      },
      {
        "title": "File Manager",
        "type": "simple",
        "badge": {
          "class": "badge badge-danger",
          "text": "NEW"
        },
        "link": "/applications-file-manager"
      },
      {
        "title": "Mail",
        "type": "simple",
        "link": "/applications-mail"
      },
      {
        "title": "Projects",
        "type": "simple",
        "link": "/applications-projects"
      },
      {
        "title": "App Widgets",
        "type": "simple",
        "link": "/applications-widgets"
      }
    ]
  },
  {
    "title": "Pages",
    "type": "dropdown",
    "icon": "<i class=\"pe-7s-portfolio\"></i>",
    "submenus": [
      {
        "title": "Login",
        "type": "simple",
        "link": "/pages-login"
      },
      {
        "title": "Register",
        "type": "simple",
        "link": "/pages-register"
      },
      {
        "title": "Recover Password",
        "type": "simple",
        "link": "/pages-recover-password"
      },
      {
        "title": "Profile",
        "type": "simple",
        "link": "/pages-profile"
      },
      {
        "title": "Invoice",
        "type": "simple",
        "link": "/pages-invoice"
      },
      {
        "title": "Error 404",
        "type": "simple",
        "link": "/pages-error-404"
      },
      {
        "title": "Error 500",
        "type": "simple",
        "link": "/pages-error-500"
      },
      {
        "title": "Error 505",
        "type": "simple",
        "link": "/pages-error-505"
      }
    ]
  },
  {
    "title": "UI Components",
    "type": "header"
  },
  {
    "title": "Elements",
    "type": "dropdown",
    "icon": "<i class=\"pe-7s-keypad\"></i>",
    "submenus": [
      {
        "title": "Buttons",
        "type": "simple",
        "link": "/buttons"
      },
      {
        "title": "Dropdowns",
        "type": "simple",
        "link": "/dropdowns"
      },
      {
        "title": "Navigation menus",
        "type": "simple",
        "link": "/navigation-menus"
      },
      {
        "title": "Avatars",
        "type": "simple",
        "icon": "<fa-icon [icon]=\"['fab', 'github']\"></fa-icon>",
        "link": "/avatars"
      },
      {
        "title": "Progress Bars",
        "type": "simple",
        "link": "/progress-bars"
      },
      {
        "title": "Ratings",
        "type": "simple",
        "link": "/ratings"
      },
      {
        "title": "Pagination",
        "type": "simple",
        "link": "/pagination"
      },
      {
        "title": "Ribbons",
        "type": "simple",
        "link": "/ribbons"
      },
      {
        "title": "Scrollable",
        "type": "simple",
        "link": "/scrollable"
      },
      {
        "title": "Search Bars",
        "type": "simple",
        "link": "/search-bars"
      },
      {
        "title": "Badges",
        "type": "simple",
        "link": "/badges"
      },
      {
        "title": "Icons",
        "type": "simple",
        "link": "/icons"
      },
      {
        "title": "Timelines",
        "type": "simple",
        "link": "/timelines"
      },
      {
        "title": "Utilities & Helpers",
        "type": "simple",
        "link": "/utilities-helpers"
      }
    ]
  },
  {
    "title": "Cards",
    "type": "dropdown",
    "icon": "<i class=\"pe-7s-box2\"></i>",
    "badge": {
      "class": "badge badge-warning",
      "text": "280+"
    },
    "submenus": [
      {
        "title": "Cards examples 1",
        "type": "simple",
        "link": "/cards-1"
      },
      {
        "title": "Cards examples 2",
        "type": "simple",
        "link": "/cards-2"
      },
      {
        "title": "Cards examples 3",
        "type": "simple",
        "link": "/cards-3"
      },
      {
        "title": "Cards examples 4",
        "type": "simple",
        "link": "/cards-4"
      },
      {
        "title": "Cards examples 5",
        "type": "simple",
        "link": "/cards-5"
      },
      {
        "title": "Cards examples 6",
        "type": "simple",
        "link": "/cards-6"
      },
      {
        "title": "Cards examples 7",
        "type": "simple",
        "link": "/cards-7"
      },
      {
        "title": "Cards examples 8",
        "type": "simple",
        "link": "/cards-8"
      },
      {
        "title": "Cards examples 9",
        "type": "simple",
        "link": "/cards-9"
      },
      {
        "title": "Cards examples 10",
        "type": "simple",
        "link": "/cards-10"
      },
      {
        "title": "Cards examples 11",
        "type": "simple",
        "link": "/cards-11"
      },
      {
        "title": "Cards examples 12",
        "type": "simple",
        "link": "/cards-12"
      }
    ]
  },
  {
    "title": "List Groups",
    "type": "simple",
    "icon": "<i class=\"pe-7s-id\"></i>",
    "link": "/list-groups"
  },
  {
    "title": "Presentation Blocks",
    "type": "dropdown",
    "icon": "<i class=\"pe-7s-box2\"></i>",
    "submenus": [
      {
        "title": "Landing page",
        "type": "simple",
        "link": ""
      },
      {
        "title": "Feature sections",
        "type": "simple",
        "link": "/feature-sections"
      },
      {
        "title": "Icon Boxes",
        "type": "simple",
        "link": "/icon-boxes"
      },
      {
        "title": "Pricing Tables",
        "type": "simple",
        "link": "/pricing-tables"
      },
      {
        "title": "Header sections",
        "type": "simple",
        "link": "/header-sections"
      },
      {
        "title": "Testimonials sections",
        "type": "simple",
        "link": "/testimonials-sections"
      },
      {
        "title": "Blog sections",
        "type": "simple",
        "link": "/blog-sections"
      },
      {
        "title": "Partners sections",
        "type": "simple",
        "link": "/partners-sections"
      },
      {
        "title": "Call to action boxes",
        "type": "simple",
        "link": "/cta-boxes"
      },
      {
        "title": "Footer sections",
        "type": "simple",
        "link": "/footer-sections"
      },
      {
        "title": "Hero sections",
        "type": "simple",
        "link": "/hero-sections"
      }
    ]
  },
  {
    "title": "Widgets",
    "type": "dropdown",
    "icon": "<i class=\"pe-7s-display2\"></i>",
    "submenus": [
      {
        "title": "Accordions",
        "type": "simple",
        "link": "/accordions"
      },
      {
        "title": "Modal dialogs",
        "type": "simple",
        "link": "/modals"
      },
      {
        "title": "Notifications",
        "type": "simple",
        "link": "/notifications"
      },
      {
        "title": "Drag & Drop",
        "type": "simple",
        "link": "/drag-drop"
      },
      {
        "title": "Calendars",
        "type": "simple",
        "link": "/calendars"
      },
      {
        "title": "Carousels",
        "type": "simple",
        "link": "/carousels"
      },
      {
        "title": "Popovers",
        "type": "simple",
        "link": "/popovers"
      },
      {
        "title": "Tooltips",
        "type": "simple",
        "link": "/tooltips"
      },
      {
        "title": "Tree View",
        "type": "simple",
        "link": "/tree-view"
      },
      {
        "title": "Tabs",
        "type": "simple",
        "link": "/tabs"
      },
      {
        "title": "Guided Tours",
        "type": "simple",
        "link": "/guided-tours"
      },
      {
        "title": "Image Crop",
        "type": "simple",
        "link": "/image-crop"
      },
      {
        "title": "Loading Indicators",
        "type": "simple",
        "link": "/loading-indicators"
      },
      {
        "title": "Count Up",
        "type": "simple",
        "link": "/count-up"
      },
      {
        "title": "Context Menus",
        "type": "simple",
        "link": "/context-menus"
      }
    ]
  },
  {
    "title": "Tables",
    "type": "header"
  },
  {
    "title": "Regular Tables",
    "type": "dropdown",
    "icon": "<i class=\"pe-7s-albums\"></i>",
    "submenus": [
      {
        "title": "Tables examples 1",
        "type": "simple",
        "link": "/regular-tables-1"
      },
      {
        "title": "Tables examples 2",
        "type": "simple",
        "link": "/regular-tables-2"
      },
      {
        "title": "Tables examples 3",
        "type": "simple",
        "link": "/regular-tables-3"
      },
      {
        "title": "Tables examples 4",
        "type": "simple",
        "link": "/regular-tables-4"
      },
      {
        "title": "Tables examples 5",
        "type": "simple",
        "link": "/regular-tables-5"
      }
    ]
  },
  {
    "title": "Dynamic Tables",
    "type": "dropdown",
    "icon": "<i class=\"pe-7s-edit\"></i>",
    "submenus": [
      {
        "title": "NG2 Smart Table",
        "type": "simple",
        "link": "/dynamic-tables-1"
      },
      {
        "title": "NG2 Table",
        "type": "simple",
        "link": "/dynamic-tables-2"
      }
    ]
  },
  {
    "title": "Forms",
    "type": "header"
  },
  {
    "title": "Elements",
    "type": "dropdown",
    "icon": "<i class=\"pe-7s-menu\"></i>",
    "submenus": [
      {
        "title": "Layout",
        "type": "simple",
        "link": "/forms-layout"
      },
      {
        "title": "Controls",
        "type": "simple",
        "link": "/forms-controls"
      },
      {
        "title": "Wizard",
        "type": "simple",
        "link": "/forms-wizard"
      }
    ]
  },
  {
    "title": "Widgets",
    "type": "dropdown",
    "icon": "<i class=\"pe-7s-tools\"></i>",
    "submenus": [
      {
        "title": "Clipboard",
        "type": "simple",
        "link": "/forms-clipboard"
      },
      {
        "title": "Colorpicker",
        "type": "simple",
        "link": "/forms-colorpicker"
      },
      {
        "title": "Datepicker",
        "type": "simple",
        "link": "/forms-datepicker"
      },
      {
        "title": "Dual Listbox",
        "type": "simple",
        "link": "/forms-dual-listbox"
      },
      {
        "title": "Input Mask",
        "type": "simple",
        "link": "/forms-input-mask"
      },
      {
        "title": "Input Select",
        "type": "simple",
        "link": "/forms-input-select"
      },
      {
        "title": "Slider",
        "type": "simple",
        "link": "/forms-slider"
      },
      {
        "title": "Textarea Autosize",
        "type": "simple",
        "link": "/forms-textarea-autosize"
      },
      {
        "title": "Timepicker",
        "type": "simple",
        "link": "/forms-timepicker"
      },
      {
        "title": "Toggle Switch",
        "type": "simple",
        "link": "/forms-toggle-switch"
      },
      {
        "title": "Typeahead",
        "type": "simple",
        "link": "/forms-typeahead"
      },
      {
        "title": "Upload",
        "type": "simple",
        "link": "/forms-upload"
      },
      {
        "title": "Validation",
        "type": "simple",
        "link": "/forms-validation"
      },
      {
        "title": "WYSIWYG Editors",
        "type": "simple",
        "link": "/forms-wysiwyg-editor"
      }
    ]
  },
  {
    "title": "Others",
    "type": "header"
  },
  {
    "title": "Charts",
    "type": "dropdown",
    "icon": "<i class=\"pe-7s-graph1\"></i>",
    "submenus": [
      {
        "title": "Apex Charts",
        "type": "simple",
        "link": "/apex-charts"
      },
      {
        "title": "Gauges Charts",
        "type": "simple",
        "link": "/gauges-charts"
      },
      {
        "title": "ChartJS",
        "type": "simple",
        "icon": "<fa-icon [icon]=\"['fab', 'github']\"></fa-icon>",
        "link": "/chartjs-charts"
      },
      {
        "title": "Sparklines Charts",
        "type": "simple",
        "badge": {
          "class": "badge badge-danger",
          "text": "NEW"
        },
        "link": "/sparklines-charts"
      }
    ]
  },
  {
    "title": "Maps",
    "type": "simple",
    "icon": "<i class=\"pe-7s-map-2\"></i>",
    "link": "/maps"
  }
];

    constructor() { }

    getMenuList() {
        return this.menus;
    }

    getMenuItemByUrl(aMenus: MenuItem[], aUrl: string): MenuItem {
        for (const theMenu of aMenus) {
            if (theMenu.link && theMenu.link === aUrl) {
                return theMenu;
            }

            if (theMenu.submenus && theMenu.submenus.length > 0) {
                const foundItem = this.getMenuItemByUrl(theMenu.submenus, aUrl);
                if (foundItem) {
                    return foundItem;
                }
            }
        }

        return undefined;
    }

    toggleMenuItem(aMenus: MenuItem[], aCurrentMenu: MenuItem): MenuItem[] {
        return aMenus.map((aMenu: MenuItem) => {
            if (aMenu === aCurrentMenu) {
                aMenu.active = !aMenu.active;
            } else {
                aMenu.active = false;
            }

            if (aMenu.submenus && aMenu.submenus.length > 0) {
                aMenu.submenus = this.toggleMenuItem(aMenu.submenus, aCurrentMenu);

                if (aMenu.submenus.find(aChild => aChild.active)) {
                    aMenu.active = true;
                }
            }

            return aMenu;
        });
    }
}
