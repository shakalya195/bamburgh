import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages

import { DashboardDefaultComponent } from './example-pages/dashboard-default/dashboard-default.component';
import { DashboardAnalyticsComponent } from './example-pages/dashboard-analytics/dashboard-analytics.component';
import { DashboardSalesComponent } from './example-pages/dashboard-sales/dashboard-sales.component';
import { DashboardReportsComponent } from './example-pages/dashboard-reports/dashboard-reports.component';
import { DashboardRealEstateComponent } from './example-pages/dashboard-real-estate/dashboard-real-estate.component';
import { DashboardServerStatusComponent } from './example-pages/dashboard-server-status/dashboard-server-status.component';
import { DashboardProjectsComponent } from './example-pages/dashboard-projects/dashboard-projects.component';
import { DashboardHelpdeskComponent } from './example-pages/dashboard-helpdesk/dashboard-helpdesk.component';
import { DashboardCustomersComponent } from './example-pages/dashboard-customers/dashboard-customers.component';
import { DashboardCryptocurrencyComponent } from './example-pages/dashboard-cryptocurrency/dashboard-cryptocurrency.component';
import { DashboardCrmManagerComponent } from './example-pages/dashboard-crm-manager/dashboard-crm-manager.component';
import { DashboardContentComponent } from './example-pages/dashboard-content/dashboard-content.component';
import { ApplicationsCalendarComponent } from './example-pages/applications-calendar/applications-calendar.component';
import { ApplicationsChatComponent } from './example-pages/applications-chat/applications-chat.component';
import { ApplicationsContactsComponent } from './example-pages/applications-contacts/applications-contacts.component';
import { ApplicationsFileManagerComponent } from './example-pages/applications-file-manager/applications-file-manager.component';
import { ApplicationsMailComponent } from './example-pages/applications-mail/applications-mail.component';
import { ApplicationsProjectsComponent } from './example-pages/applications-projects/applications-projects.component';
import { ApplicationsWidgetsComponent } from './example-pages/applications-widgets/applications-widgets.component';
import { PagesLoginComponent } from './example-pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './example-pages/pages-register/pages-register.component';
import { PagesRecoverPasswordComponent } from './example-pages/pages-recover-password/pages-recover-password.component';
import { PagesProfileComponent } from './example-pages/pages-profile/pages-profile.component';
import { PagesInvoiceComponent } from './example-pages/pages-invoice/pages-invoice.component';
import { PagesError404Component } from './example-pages/pages-error-404/pages-error-404.component';
import { PagesError500Component } from './example-pages/pages-error-500/pages-error-500.component';
import { PagesError505Component } from './example-pages/pages-error-505/pages-error-505.component';
import { ButtonsComponent } from './example-pages/buttons/buttons.component';
import { DropdownsComponent } from './example-pages/dropdowns/dropdowns.component';
import { NavigationMenusComponent } from './example-pages/navigation-menus/navigation-menus.component';
import { AvatarsComponent } from './example-pages/avatars/avatars.component';
import { ProgressBarsComponent } from './example-pages/progress-bars/progress-bars.component';
import { RatingsComponent } from './example-pages/ratings/ratings.component';
import { PaginationComponent } from './example-pages/pagination/pagination.component';
import { RibbonsComponent } from './example-pages/ribbons/ribbons.component';
import { ScrollableComponent } from './example-pages/scrollable/scrollable.component';
import { SearchBarsComponent } from './example-pages/search-bars/search-bars.component';
import { BadgesComponent } from './example-pages/badges/badges.component';
import { IconsComponent } from './example-pages/icons/icons.component';
import { TimelinesComponent } from './example-pages/timelines/timelines.component';
import { UtilitiesHelpersComponent } from './example-pages/utilities-helpers/utilities-helpers.component';
import { Cards1Component } from './example-pages/cards-1/cards-1.component';
import { Cards2Component } from './example-pages/cards-2/cards-2.component';
import { Cards3Component } from './example-pages/cards-3/cards-3.component';
import { Cards4Component } from './example-pages/cards-4/cards-4.component';
import { Cards5Component } from './example-pages/cards-5/cards-5.component';
import { Cards6Component } from './example-pages/cards-6/cards-6.component';
import { Cards7Component } from './example-pages/cards-7/cards-7.component';
import { Cards8Component } from './example-pages/cards-8/cards-8.component';
import { Cards9Component } from './example-pages/cards-9/cards-9.component';
import { Cards10Component } from './example-pages/cards-10/cards-10.component';
import { Cards11Component } from './example-pages/cards-11/cards-11.component';
import { Cards12Component } from './example-pages/cards-12/cards-12.component';
import { ListGroupsComponent } from './example-pages/list-groups/list-groups.component';
import { LandingPageComponent } from './example-pages/landing-page/landing-page.component';
import { FeatureSectionsComponent } from './example-pages/feature-sections/feature-sections.component';
import { IconBoxesComponent } from './example-pages/icon-boxes/icon-boxes.component';
import { PricingTablesComponent } from './example-pages/pricing-tables/pricing-tables.component';
import { HeaderSectionsComponent } from './example-pages/header-sections/header-sections.component';
import { TestimonialsSectionsComponent } from './example-pages/testimonials-sections/testimonials-sections.component';
import { BlogSectionsComponent } from './example-pages/blog-sections/blog-sections.component';
import { PartnersSectionsComponent } from './example-pages/partners-sections/partners-sections.component';
import { CtaBoxesComponent } from './example-pages/cta-boxes/cta-boxes.component';
import { FooterSectionsComponent } from './example-pages/footer-sections/footer-sections.component';
import { HeroSectionsComponent } from './example-pages/hero-sections/hero-sections.component';
import { AccordionsComponent } from './example-pages/accordions/accordions.component';
import { ModalsComponent } from './example-pages/modals/modals.component';
import { NotificationsComponent } from './example-pages/notifications/notifications.component';
import { DragDropComponent } from './example-pages/drag-drop/drag-drop.component';
import { CalendarsComponent } from './example-pages/calendars/calendars.component';
import { CarouselsComponent } from './example-pages/carousels/carousels.component';
import { PopoversComponent } from './example-pages/popovers/popovers.component';
import { TooltipsComponent } from './example-pages/tooltips/tooltips.component';
import { TreeViewComponent } from './example-pages/tree-view/tree-view.component';
import { TabsComponent } from './example-pages/tabs/tabs.component';
import { GuidedToursComponent } from './example-pages/guided-tours/guided-tours.component';
import { ImageCropComponent } from './example-pages/image-crop/image-crop.component';
import { LoadingIndicatorsComponent } from './example-pages/loading-indicators/loading-indicators.component';
import { CountUpComponent } from './example-pages/count-up/count-up.component';
import { ContextMenusComponent } from './example-pages/context-menus/context-menus.component';
import { RegularTables1Component } from './example-pages/regular-tables-1/regular-tables-1.component';
import { RegularTables2Component } from './example-pages/regular-tables-2/regular-tables-2.component';
import { RegularTables3Component } from './example-pages/regular-tables-3/regular-tables-3.component';
import { RegularTables4Component } from './example-pages/regular-tables-4/regular-tables-4.component';
import { RegularTables5Component } from './example-pages/regular-tables-5/regular-tables-5.component';
import { DynamicTables1Component } from './example-pages/dynamic-tables-1/dynamic-tables-1.component';
import { DynamicTables2Component } from './example-pages/dynamic-tables-2/dynamic-tables-2.component';
import { FormsLayoutComponent } from './example-pages/forms-layout/forms-layout.component';
import { FormsControlsComponent } from './example-pages/forms-controls/forms-controls.component';
import { FormsWizardComponent } from './example-pages/forms-wizard/forms-wizard.component';
import { FormsClipboardComponent } from './example-pages/forms-clipboard/forms-clipboard.component';
import { FormsColorpickerComponent } from './example-pages/forms-colorpicker/forms-colorpicker.component';
import { FormsDatepickerComponent } from './example-pages/forms-datepicker/forms-datepicker.component';
import { FormsDualListboxComponent } from './example-pages/forms-dual-listbox/forms-dual-listbox.component';
import { FormsInputMaskComponent } from './example-pages/forms-input-mask/forms-input-mask.component';
import { FormsInputSelectComponent } from './example-pages/forms-input-select/forms-input-select.component';
import { FormsSliderComponent } from './example-pages/forms-slider/forms-slider.component';
import { FormsTextareaAutosizeComponent } from './example-pages/forms-textarea-autosize/forms-textarea-autosize.component';
import { FormsTimepickerComponent } from './example-pages/forms-timepicker/forms-timepicker.component';
import { FormsToggleSwitchComponent } from './example-pages/forms-toggle-switch/forms-toggle-switch.component';
import { FormsTypeaheadComponent } from './example-pages/forms-typeahead/forms-typeahead.component';
import { FormsUploadComponent } from './example-pages/forms-upload/forms-upload.component';
import { FormsValidationComponent } from './example-pages/forms-validation/forms-validation.component';
import { FormsWysiwygEditorComponent } from './example-pages/forms-wysiwyg-editor/forms-wysiwyg-editor.component';
import { ApexChartsComponent } from './example-pages/apex-charts/apex-charts.component';
import { GaugesChartsComponent } from './example-pages/gauges-charts/gauges-charts.component';
import { ChartjsChartsComponent } from './example-pages/chartjs-charts/chartjs-charts.component';
import { SparklinesChartsComponent } from './example-pages/sparklines-charts/sparklines-charts.component';
import { MapsComponent } from './example-pages/maps/maps.component';

// Layouts

import { LeftSidebarComponent } from './layout-blueprints/left-sidebar/left-sidebar.component';
import { CollapsedSidebarComponent } from './layout-blueprints/collapsed-sidebar/collapsed-sidebar.component';
import { MinimalLayoutComponent } from './layout-blueprints/minimal-layout/minimal-layout.component';
import { PresentationLayoutComponent } from './layout-blueprints/presentation-layout/presentation-layout.component';

const routes: Routes = [
    {
    path: '',
    component: PresentationLayoutComponent,
    children: [
      { path: '', component: LandingPageComponent, pathMatch: 'full'  },
    ]
    },
    {
    path: '',
    component: CollapsedSidebarComponent,
    children: [
      { path: 'applications-calendar', component: ApplicationsCalendarComponent },
      { path: 'applications-chat', component: ApplicationsChatComponent },
      { path: 'applications-contacts', component: ApplicationsContactsComponent },
      { path: 'applications-file-manager', component: ApplicationsFileManagerComponent },
      { path: 'applications-mail', component: ApplicationsMailComponent },
    ]
    },
    {
    path: '',
    component: MinimalLayoutComponent,
    children: [
      { path: 'pages-login', component: PagesLoginComponent },
      { path: 'pages-register', component: PagesRegisterComponent },
      { path: 'pages-recover-password', component: PagesRecoverPasswordComponent },
      { path: 'pages-error-404', component: PagesError404Component },
      { path: 'pages-error-500', component: PagesError500Component },
      { path: 'pages-error-505', component: PagesError505Component },
    ]
    },
    {
    path: '',
    component: LeftSidebarComponent,
    children: [
      { path: 'dashboard-default', component: DashboardDefaultComponent },
      { path: 'dashboard-analytics', component: DashboardAnalyticsComponent },
      { path: 'dashboard-sales', component: DashboardSalesComponent },
      { path: 'dashboard-reports', component: DashboardReportsComponent },
      { path: 'dashboard-real-estate', component: DashboardRealEstateComponent },
      { path: 'dashboard-server-status', component: DashboardServerStatusComponent },
      { path: 'dashboard-projects', component: DashboardProjectsComponent },
      { path: 'dashboard-helpdesk', component: DashboardHelpdeskComponent },
      { path: 'dashboard-customers', component: DashboardCustomersComponent },
      { path: 'dashboard-cryptocurrency', component: DashboardCryptocurrencyComponent },
      { path: 'dashboard-crm-manager', component: DashboardCrmManagerComponent },
      { path: 'dashboard-content', component: DashboardContentComponent },
      { path: 'applications-projects', component: ApplicationsProjectsComponent },
      { path: 'applications-widgets', component: ApplicationsWidgetsComponent },
      { path: 'pages-profile', component: PagesProfileComponent },
      { path: 'pages-invoice', component: PagesInvoiceComponent },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'dropdowns', component: DropdownsComponent },
      { path: 'navigation-menus', component: NavigationMenusComponent },
      { path: 'avatars', component: AvatarsComponent },
      { path: 'progress-bars', component: ProgressBarsComponent },
      { path: 'ratings', component: RatingsComponent },
      { path: 'pagination', component: PaginationComponent },
      { path: 'ribbons', component: RibbonsComponent },
      { path: 'scrollable', component: ScrollableComponent },
      { path: 'search-bars', component: SearchBarsComponent },
      { path: 'badges', component: BadgesComponent },
      { path: 'icons', component: IconsComponent },
      { path: 'timelines', component: TimelinesComponent },
      { path: 'utilities-helpers', component: UtilitiesHelpersComponent },
      { path: 'cards-1', component: Cards1Component },
      { path: 'cards-2', component: Cards2Component },
      { path: 'cards-3', component: Cards3Component },
      { path: 'cards-4', component: Cards4Component },
      { path: 'cards-5', component: Cards5Component },
      { path: 'cards-6', component: Cards6Component },
      { path: 'cards-7', component: Cards7Component },
      { path: 'cards-8', component: Cards8Component },
      { path: 'cards-9', component: Cards9Component },
      { path: 'cards-10', component: Cards10Component },
      { path: 'cards-11', component: Cards11Component },
      { path: 'cards-12', component: Cards12Component },
      { path: 'list-groups', component: ListGroupsComponent },
      { path: 'feature-sections', component: FeatureSectionsComponent },
      { path: 'icon-boxes', component: IconBoxesComponent },
      { path: 'pricing-tables', component: PricingTablesComponent },
      { path: 'header-sections', component: HeaderSectionsComponent },
      { path: 'testimonials-sections', component: TestimonialsSectionsComponent },
      { path: 'blog-sections', component: BlogSectionsComponent },
      { path: 'partners-sections', component: PartnersSectionsComponent },
      { path: 'cta-boxes', component: CtaBoxesComponent },
      { path: 'footer-sections', component: FooterSectionsComponent },
      { path: 'hero-sections', component: HeroSectionsComponent },
      { path: 'accordions', component: AccordionsComponent },
      { path: 'modals', component: ModalsComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'drag-drop', component: DragDropComponent },
      { path: 'calendars', component: CalendarsComponent },
      { path: 'carousels', component: CarouselsComponent },
      { path: 'popovers', component: PopoversComponent },
      { path: 'tooltips', component: TooltipsComponent },
      { path: 'tree-view', component: TreeViewComponent },
      { path: 'tabs', component: TabsComponent },
      { path: 'guided-tours', component: GuidedToursComponent },
      { path: 'image-crop', component: ImageCropComponent },
      { path: 'loading-indicators', component: LoadingIndicatorsComponent },
      { path: 'count-up', component: CountUpComponent },
      { path: 'context-menus', component: ContextMenusComponent },
      { path: 'regular-tables-1', component: RegularTables1Component },
      { path: 'regular-tables-2', component: RegularTables2Component },
      { path: 'regular-tables-3', component: RegularTables3Component },
      { path: 'regular-tables-4', component: RegularTables4Component },
      { path: 'regular-tables-5', component: RegularTables5Component },
      { path: 'dynamic-tables-1', component: DynamicTables1Component },
      { path: 'dynamic-tables-2', component: DynamicTables2Component },
      { path: 'forms-layout', component: FormsLayoutComponent },
      { path: 'forms-controls', component: FormsControlsComponent },
      { path: 'forms-wizard', component: FormsWizardComponent },
      { path: 'forms-clipboard', component: FormsClipboardComponent },
      { path: 'forms-colorpicker', component: FormsColorpickerComponent },
      { path: 'forms-datepicker', component: FormsDatepickerComponent },
      { path: 'forms-dual-listbox', component: FormsDualListboxComponent },
      { path: 'forms-input-mask', component: FormsInputMaskComponent },
      { path: 'forms-input-select', component: FormsInputSelectComponent },
      { path: 'forms-slider', component: FormsSliderComponent },
      { path: 'forms-textarea-autosize', component: FormsTextareaAutosizeComponent },
      { path: 'forms-timepicker', component: FormsTimepickerComponent },
      { path: 'forms-toggle-switch', component: FormsToggleSwitchComponent },
      { path: 'forms-typeahead', component: FormsTypeaheadComponent },
      { path: 'forms-upload', component: FormsUploadComponent },
      { path: 'forms-validation', component: FormsValidationComponent },
      { path: 'forms-wysiwyg-editor', component: FormsWysiwygEditorComponent },
      { path: 'apex-charts', component: ApexChartsComponent },
      { path: 'gauges-charts', component: GaugesChartsComponent },
      { path: 'chartjs-charts', component: ChartjsChartsComponent },
      { path: 'sparklines-charts', component: SparklinesChartsComponent },
      { path: 'maps', component: MapsComponent },
    ]
    },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
