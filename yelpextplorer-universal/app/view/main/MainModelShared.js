Ext.define('YelpExtplorer.view.main.MainModelShared', {
    extend: 'Ext.app.ViewModel',
   
    requires:['YelpExtplorer.model.Business'],

    data: {
        location: null,
        business: null,
        typedCity: null,
        typedCategory: null,
        category: 'pizza',
        city: 'Amsterdam'
    },
    stores: {
        businesses: { 
            model: 'YelpExtplorer.model.Business',
            sorters: ['name'],
            pageSize: 20 // Yelp limits results to 20 at a time
        },
        sortableBusinesses: {
            source: '{businesses}'
        }
    }
});