Ext.define('YelpExtplorer.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',

        'YelpExtplorer.view.main.MainController',
        'YelpExtplorer.view.main.MainModel',
        'YelpExtplorer.view.Banner',
        'YelpExtplorer.view.businesses.TabPanel',
        'YelpExtplorer.view.business.Detail',
        'YelpExtplorer.view.businesses.Filter'
    ],

    controller: 'main',
    viewModel: 'main',

    dockedItems: [{
        dock: 'top',
        xtype: 'banner'
    }, {
        dock: 'top',
        xtype: 'businessesfilter'
   }],
   layout: 'border',
   items: [{
        region: 'center',
        xtype: 'businessestabpanel'
    }, {
        region: 'east',
        xtype: 'businessdetail',
        bind: {
            data: '{business}'
        },
        width: 130
    }]

});