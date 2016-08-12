Ext.define('YelpExtplorer.view.businesses.List', {
    extend: 'Ext.dataview.List',
    xtype: 'businesseslist',
    config: {
        cls: 'nearby',
        scrollable: true,
        itemTpl: [
            '<tpl if="image_url"><img src="{image_url}" height="50">&nbsp;</tpl>',
            '{name}'
        ]
    }
});
