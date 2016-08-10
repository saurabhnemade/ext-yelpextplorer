Ext.define('YelpExtplorer.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    requires: ['Shared.Geocode'],

    initViewModel: function (vm) {
        var me = this;

        /*
        vm.bind('{city}', function (city) {
            console.log(city);
        });
        vm.bind('{category}', function (category) {
            console.log(category);
        });*/

        vm.bind('{city}', Ext.Function.createBuffered(me.geocodeCity, 1000), me);
    },

    geocodeCity: function (city) {
        var me = this;
        Shared.Geocode.geocodeAddress(city, function (coordinates) {
            if (coordinates) {
                me.getViewModel().set('location', coordinates);
            }
        });
    }

});