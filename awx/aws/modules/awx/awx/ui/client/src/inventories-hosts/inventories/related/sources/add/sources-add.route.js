import { N_ } from '../../../../../i18n';

export default {
    name: "inventories.edit.inventory_sources.add",
    url: "/add",
    ncyBreadcrumb: {
        parent: "inventories.edit.inventory_sources",
        label: N_("CREATE INVENTORY SOURCE")
    },
    views: {
        'sourcesForm@inventories': {
            templateProvider: function(GenerateForm, SourcesFormDefinition) {
                let form = SourcesFormDefinition;
                return GenerateForm.buildHTML(form, {
                    mode: 'add',
                    related: false
                });
            },
            controller: 'SourcesAddController'
        }
    },
    resolve: {
        inventorySourcesOptions: ['InventoriesService', '$stateParams', function(InventoriesService, $stateParams) {
            return InventoriesService.inventorySourcesOptions($stateParams.inventory_id)
                .then(function(res) {
                    return res.data;
                });
        }]
    }
};
