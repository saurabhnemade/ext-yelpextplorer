Ext.define('YelpExtplorer.view.business.Edit', {
    extend: 'Ext.form.Panel',
    xtype: 'businessedit',
    config: {
        bodyPadding: 8,
        layout: {
            type: 'vbox'
        },
        items: [{
            xtype: 'component',
            height: 20
        }, {
            xtype: 'textfield',
            label: 'Name',
            bind: {
                value: '{business.name}'
            }
        }, {
            xtype: 'component',
            height: 20
        }, {
            xtype: 'togglefield',
            label: 'Closed',
            bind: {
                value: '{business.is_closed}'
            }
        }, {
            xtype: 'component',
            height: 20
        }, {
            xtype: 'urlfield',
            label: 'URL',
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