Ext.define("YelpExtplorer.view.business.edit.Window", {
    extend: 'Ext.window.Window',
    xtype: 'editbusinesswindow',
    requires: [
        'YelpExtplorer.view.business.edit.WindowController',
        'YelpExtplorer.view.business.edit.WindowModel',
        'Ext.form.Panel',
        'Ext.ux.rating.Picker'
    ],
    controller: 'business-edit-window',
    viewModel: {
        type: 'business-edit-window'
    },
    resizable: false,
    bodyPadding: 8,
    modal: true,

    layout: 'fit',

    items: [{
        xtype: 'form',
        reference: 'form',
        modelValidation: true,
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Name',
            bind: {
                value: '{business.name}'
            }
        }, {
            xtype: 'rating',
            rounding: 0.5,
            minimum: 1,
            maximum: 5,
            selectedStyle: 'color: #ff4444',
            overStyle: 'color: #ff0000',
            bind: {
                value: '{business.rating}'
            }
        }],
        buttons: [{
            text: 'Save',
            formBind: true,
            handler: 'onSaveClick'
        }, {
            text: 'Cancel',
            handler: 'onCancelClick'
        }]
    }]

});