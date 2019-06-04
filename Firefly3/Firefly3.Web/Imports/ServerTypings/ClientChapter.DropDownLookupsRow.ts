namespace Firefly3.ClientChapter {
    export interface DropDownLookupsRow {
        DropDownLookupsSKey?: number;
        DropDownField?: string;
        DropdownValue?: string;
        DropdownSort?: number;
        CreateDate?: string;
        ModifiedDate?: string;
        CreatedBy?: string;
        ModifiedBy?: string;
    }

    export namespace DropDownLookupsRow {
        export const idProperty = 'DropDownLookupsSKey';
        export const nameProperty = 'DropDownField';
        export const localTextPrefix = 'ClientChapter.DropDownLookups';

        export declare const enum Fields {
            DropDownLookupsSKey = "DropDownLookupsSKey",
            DropDownField = "DropDownField",
            DropdownValue = "DropdownValue",
            DropdownSort = "DropdownSort",
            CreateDate = "CreateDate",
            ModifiedDate = "ModifiedDate",
            CreatedBy = "CreatedBy",
            ModifiedBy = "ModifiedBy"
        }
    }
}

