Ext.define('YelpExtplorer.view.main.MainController', {
    extend: 'YelpExtplorer.view.main.MainControllerShared',
    alias: 'controller.main-main',
    initViewModel: function(vm) {
        var me = this;
        me.callParent(arguments);
        vm.bind('{business}', me.onBusinessSelect, me);
    },
    onBusinessSelect: function(business) {
        if (business) {
            console.log(business.data.name);
        }
    }
});