Ext.define('YelpExtplorer.view.main.MainControllerShared', {
    extend: 'Ext.app.ViewController',

    requires: ['Shared.Geocode'],

    initViewModel: function(vm) {
        var me = this;

        // When the user types, wait a second before updating {city}
        vm.bind('{typedCity}', Ext.Function.createBuffered(function(city) {
            vm.set('city', city);
        }, 1000), me);
        // When the user types, wait a second before updating {category}
        vm.bind('{typedCategory}', Ext.Function.createBuffered(function(category) {
            vm.set('category', category);
        }, 1000));

        // Set the initial typed values.
        vm.set('typedCity', vm.get('city'));
        vm.set('typedCategory', vm.get('category'));

        vm.bind('{city}', me.geocodeCity, me);

        vm.bind('{location}', me.load, me);
        vm.bind('{category}', me.load, me);

    },


    geocodeCity: function (city) {
        var me = this;
        Shared.Geocode.geocodeAddress(city, function (coordinates) {
            if (coordinates) {
                me.getViewModel().set('location', coordinates);
            }
        });
    },

    load: function() {
        var vm = this.getViewModel();
        var location = vm.get('location');
        var category = vm.get('category');
        if (!location) return;
        var store = vm.getStore('businesses');
        var params = {
            ll: (location.latitude + ',' + location.longitude)
        };
        if (category) {
            params.term = category;
        }
        store.load({
            params: params
        });
        vm.set('business', null);
    }

});

