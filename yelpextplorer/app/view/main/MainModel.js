Ext.define('YelpExtplorer.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    data: {
        city: null,
        category: null,
        location: {
            // Bismark, ND          
            latitude: 46.809076,
            longitude: -100.7670546
        }
    }

    /*
    stores: {
        businesses: {
            model: 'YelpExtplorer.model.Business',
            autoLoad: true,
            pageSize: 200,
            remoteFilter: true,
            sorters: ['name']
        }
    }*/
});