
Ext.define('YelpExtplorer.view.business.Detail', {
    extend: 'Ext.panel.Panel',

    requires: [
        'YelpExtplorer.view.business.DetailController',
        'YelpExtplorer.view.business.DetailModel'
    ],

    controller: 'business-detail',
    viewModel: {
        type: 'business-detail'
    },

    xtype: 'businessdetail',

    padding: 20,

    tbar: [{
        xtype: 'button',
        text: 'Edit',
        handler: 'onEditClick',
        bind: {
            disabled: '{!business}'
        }
    }],

    bbar: {
        xtype: 'component',
        height: 25,
        width: 155,
        html: [
            '<a href="http://www.yelp.com" target="_blank">',
            '<img src="resources/images/Powered_By_Yelp_Red.png"/></a>'
        ]
    },

    tpl: [
        '<tpl if="this.isData(values)">',
        '<div>',
        '<p><b>{name}</b></p>',
        '{[Ext.Array.map(values.categories, function(item){return item[0];}).join("<br/>")]}<br/><br/>',
        '<img src="resources/images/stars_{rating}.png"/><br/>',
        '<img src="{image_url}"/><br/><br/>',
        'Reviews: {review_count}<br/><br/>',
        '{[values.location.display_address.join("<br/>")]}<br/><br/>',
        '<a href="{url}" target="_blank">Full review at Yelp.com</a>',
        '</div>',
        '</tpl>', {
            isData: function (data) {
                return !Ext.Object.isEmpty(data);
            }
        }
    ]

});
