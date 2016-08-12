Ext.define('YelpExtplorer.view.main.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'app-main',
    requires: [
        'YelpExtplorer.view.main.MainController',
        'YelpExtplorer.view.main.MainModel',
        'YelpExtplorer.view.businesses.TabPanel'
    ],

    controller: 'main-main',
    viewModel: {
        type: 'main-main'
    },

    config: {
        items: [{
            title: 'YelpExtplorer',
            layout: 'fit',
            xtype: 'container',
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                title: 'City/category filter goes here'
            }, {
                xtype: 'businessestabpanel'
            }]
        }]
    }
});
