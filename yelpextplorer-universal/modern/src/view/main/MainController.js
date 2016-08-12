Ext.define('YelpExtplorer.view.main.MainController', {
    extend: 'YelpExtplorer.view.main.MainControllerShared',
    alias: 'controller.main-main',
    requires: [
        'YelpExtplorer.view.business.Detail',
        'YelpExtplorer.view.business.Edit'
    ],

    onBusinessesListItemTap: function(list, index, target, business) {
        this.pushOnce(business);
    },
    onBusinessesMapItemTap: function(map, coordinate, business) {
        this.pushOnce(business);
    },
    pushOnce: function(business) {
        // Only push the detail page if it's not already there.
        if (business && !this.getView().down('businessdetail')) {
            this.getView().push({
                xtype: 'container',
                layout: 'fit',
                title: 'Business Details',
                items: [{
                    xtype: 'businessdetail',
                    reference: 'businessdetail',
                    data: business.data
                }, {
                    xtype: 'button',
                    docked: 'bottom',
                    text: 'Edit',
                    handler: 'onEditClick'
                }]
            });
        }
    },

    onEditClick: function(button) {
        this.getView().push({
            xtype: 'businessedit',
            viewModel: {
                data: {
                    business: this.getViewModel().get('business')
                }
            },
            edit: true, // To flag it when popping
        });
    },

    onPop: function(view, card) {
        if (card.edit) {
            var business = this.getViewModel().get('business');
            business.commit();
            this.lookupReference('businessdetail').setData(business.data);
        }
    },

    onResetClick: function(button) {
        var business = this.getViewModel().get('business');
        business.reject();
    }


});

