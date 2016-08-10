Ext.define('YelpExtplorer.view.businesses.Filter', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'businessesfilter',
    items: [{
        xtype: 'textfield',
        fieldLabel: 'City',
        labelWidth: 26,
        bind: {
            value: '{city}'
        }
    }, ' ', {
        xtype: 'textfield',
        fieldLabel: 'Category',
        labelWidth: 60,
        bind: {
            value: '{category}'
        }
    }],
    padding: 4
});