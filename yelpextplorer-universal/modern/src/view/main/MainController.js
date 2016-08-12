Ext.define('YelpExtplorer.view.main.MainController', {
    extend: 'YelpExtplorer.view.main.MainControllerShared',
    alias: 'controller.main-main',
    requires: ['YelpExtplorer.view.business.Detail'],

    onBusinessesListItemTap: function(list, index, target, business) {
        this.pushOnce(business);
    },
    onBusinessesMapItemTap: function(map, coordinate, business) {
        this.pushOnce(business);
    },
    pushOnce: function(business) {
        // Only push the detail page if it's not already there.
        // This prevents double-tapping showing two instances.
        if (business && !this.getView().down('businessdetail')) {
            this.getView().push({
                xtype: 'businessdetail',
                data: business.data
            });
        }
    }

});

