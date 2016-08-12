
Ext.define('YelpExtplorer.view.main.Main',{
    extend: 'Ext.Container',

    requires: [
        'YelpExtplorer.view.main.MainController',
        'YelpExtplorer.view.main.MainModel'
    ],

    controller: 'main-main',
    viewModel: {
        type: 'main-main'
    },

    xtype:'app-main',
    html: 'Hello, World!!'
});
