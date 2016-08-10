Ext.define('YelpExtplorer.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    requires:['YelpExtplorer.model.Business'],

    data: {
        city: null,
        category: 'pizza',
        city: 'Amsterdam'
    },
    stores: {
        businesses: { 
            model: 'YelpExtplorer.model.Business',
            pageSize: 20 // Yelp limits results to 20 at a time
        }
    }
});