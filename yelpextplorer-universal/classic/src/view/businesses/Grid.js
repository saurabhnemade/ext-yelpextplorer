Ext.define('YelpExtplorer.view.businesses.Grid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.grid.column.Column',
        'Ext.grid.column.Widget',
        'Ext.ux.rating.Picker',
        'Ext.grid.column.Template'
    ],
    xtype: 'businessesgrid',
    columns: [
        {
            text: 'Name',
            dataIndex: 'name',
            width: 120
        }, {
            xtype: 'widgetcolumn',
            text: 'Rating',
            dataIndex: 'rating',
            widget: {
                xtype: 'rating',
                rounding: 0.5,
                minimum: 1, // Yelp ratings go from 1 - 5
                maximum: 5,
                selectedStyle: 'color: #ff4444',  // Pale red
                overStyle: 'color: #ff0000' // Red
            }
        }, {
            text: 'Reviews',
            xtype: 'numbercolumn',
            dataIndex: 'review_count',
            width: 60,
            align: 'right'
        }, {
            xtype: 'templatecolumn',
            text: 'Address',
            tpl: '{[values.location.display_address.join(", ")]}',
            flex: 1
        }
    ]
});