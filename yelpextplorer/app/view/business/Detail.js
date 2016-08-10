
Ext.define('YelpExtplorer.view.business.Detail',{
    extend: 'Ext.panel.Panel',

    requires: [
        'YelpExtplorer.view.business.DetailController',
        'YelpExtplorer.view.business.DetailModel'
    ],

    controller: 'business-detail',
    viewModel: {
        type: 'business-detail'
    },

    xtype: 'businessdetail',
    html: 'businessdetail'
});
