Ext.define('YelpExtplorer.view.business.Edit', {
    extend: 'Ext.form.Panel',
    xtype: 'businessedit',
    config: {
        bodyPadding: 8,
        layout: {
            type: 'vbox'
        },
        items: [{
            xtype: 'textfield',
            label: 'Name',
            padding: '20 0',
            bind: {
                value: '{business.name}'
            }
        },{
            xtype: 'togglefield',
            label: 'Closed',
            padding: '20 0',
            bind: {
                value: '{business.is_closed}'
            }
        }, {
            xtype: 'urlfield',
            label: 'URL',
            padding: '20 0',
            bind: {
                value: '{business.url}'
            }
        },
        {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [{
                text: 'Reset',
                handler: 'onResetClick'
            }]
        }
        ]
    }
});