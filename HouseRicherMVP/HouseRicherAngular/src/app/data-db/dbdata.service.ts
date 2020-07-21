import {InMemoryDbService} from 'angular-in-memory-web-api';
import {
  DashboardSaasDb, ChartChartjsDb, AmChartsDb, AmMapsDb, GridViewsDb, ListViewsDb, TasksListDb, TaskConversationsDb,
  MailsDb, MailLabelsDb, MailFiltersDb, MailFoldersDb, MailContactsDb, ContactsDb, ChatContactsDb, ChatConversationDb,
  MetricsDb, WidgetsDb, CryptoDb, CrmDb, ListingDb, ActivitiesDb, NotificationsDb, MessagesDb, RealStateDb
} from './data';
import {PagesDb} from '@app/data-db/data/pages-db';

export class DbdataService implements InMemoryDbService {

    createDb() {
        return {
            // Dashboards
            'dashboard-saas-widgets': DashboardSaasDb.widgets,
            'dashboard-crypto-widgets': CryptoDb.widgets,
            'dashboard-crm-widgets': CrmDb.widgets,
            'dashboard-listing-widgets': ListingDb.widgets,
            'dashboard-real-state-widgets': RealStateDb.widgets,

            // Charts and Maps
            'chart-chartjs-widgets': ChartChartjsDb.widgets,
            'am-charts': AmChartsDb.charts,
            'am-maps-list': AmMapsDb.mapsList,

            // Grid Views
            'grid-views-users': GridViewsDb.usersList,
            'grid-views-realestates': GridViewsDb.realestates,

            // List Views
            'list-views-users': ListViewsDb.usersList,
            'list-views-realestates': ListViewsDb.realestates,

            // Task Managet
            'tasks-list': TasksListDb.tasks,
            'task-conversation': TaskConversationsDb.conversationData,
            'tasks-labels': TasksListDb.lables,
            'tasks-users': TasksListDb.users,
            'tasks-projects': TasksListDb.projects,

            // Mail
            'mail-list': MailsDb.list,
            'mail-folders': MailFoldersDb.list,
            'mail-filters': MailFiltersDb.list,
            'mail-labels': MailLabelsDb.list,
            'mail-contacts': MailContactsDb.list,

            // Contacts
            'contacts': ContactsDb.list,

            // Chat Panel
            'chat-contacts': ChatContactsDb.list,
            'chat-operator': ChatContactsDb.operator,
            'chat-conversation': ChatConversationDb.data,

            // metrics
            'metrics-simple-widgets': MetricsDb.simpleWidgets,
            'metrics-trending-cards': MetricsDb.trendingCards,
            'metrics-widgets': MetricsDb.widgets,

            // widgets
            'widgets-get': WidgetsDb.widgets,

            // activities
            'recent-activities': ActivitiesDb.recentActivities,

            // activities
            'my-notifications': NotificationsDb.data,

            // activities
            'my-messages': MessagesDb.data,

            /**
             * Pages section Start here
             */
            // wall pages
            'wall-page-data': PagesDb.wallPage,
            'wall-page-posts': PagesDb.wallPagePosts,

            // search page
            'search-data': PagesDb.searchPageData,

            // profile page data
            'profile-banner' : PagesDb.profilePageBannerData,
            'profile-content' : PagesDb.profilePageContentData
            /**
             * Pages section End here
             */
        };
    }
}
