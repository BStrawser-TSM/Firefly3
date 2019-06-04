namespace Firefly3.ClientChapter {
    export namespace DropDownLookupsService {
        export const baseUrl = 'ClientChapter/DropDownLookups';

        export declare function Create(request: Serenity.SaveRequest<DropDownLookupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<DropDownLookupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DropDownLookupsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DropDownLookupsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "ClientChapter/DropDownLookups/Create",
            Update = "ClientChapter/DropDownLookups/Update",
            Delete = "ClientChapter/DropDownLookups/Delete",
            Retrieve = "ClientChapter/DropDownLookups/Retrieve",
            List = "ClientChapter/DropDownLookups/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>DropDownLookupsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

