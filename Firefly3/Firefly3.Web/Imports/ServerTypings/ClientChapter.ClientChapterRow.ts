
namespace Firefly3.ClientChapter {
    export interface ClientChapterRow {
        ClientChapterSKey?: number;
        ClientId?: string;
        ChapterCode?: string;
        ChapterName?: string;
        ClientLevel1?: string;
        ClientLevel2?: string;
        ClientLevel3?: string;
        ClientLevel4?: string;
        EnvelopeLine1?: string;
        EnvelopeLine2?: string;
        EnvelopeLine3?: string;
        EnvelopeLine4?: string;
        EnvelopeLine5?: string;
        EnvelopeClientName?: string;
        ClientAddressLine1?: string;
        ClientAddressLine2?: string;
        ClientAddressLine3?: string;
        ClientCity?: string;
        ClientState?: string;
        ClientZip?: string;
        Uw?: string;
        Commander?: string;
        CommanderTitle?: string;
        BillingChapter?: string;
        AreaName?: string;
        CommanderLastName?: string;
        ClientPhone?: string;
        ClientFax?: string;
        ClientEmailAddress?: string;
        OldChapterCode?: string;
        CustomerBillingNumber?: string;
        WebAddress?: string;
        Region?: string;
        Lockbox?: boolean;
        UwBlackoutFromDate?: string;
        UwBlackoutToDate?: string;
        MdCoord?: string;
        Commander2?: string;
        CommanderTitle2?: string;
        CommanderLastName2?: string;
        BillingChapter2?: string;
        ClientEmailAddress2?: string;
        MspThank?: boolean;
        LastThankYouDate?: string;
        SeedNames?: boolean;
        OriginalName?: string;
        ClientName?: string;
        ChapterDesignation?: string;
        Division?: string;
        Active?: boolean;
        Vertical?: string;
        ClientActiveDate?: string;
        FiscalYearBegins?: string;
        Flex1?: string;
        Flex2?: string;
        Flex3?: string;
        Flex4?: string;
        Flex5?: string;
        CreateDate?: string;
        ModifiedDate?: string;
        CreatedBy?: string;
        ModifiedBy?: string;
    }

    export namespace ClientChapterRow {
        export const idProperty = 'ClientChapterSKey';
        export const nameProperty = 'ClientId';
        export const localTextPrefix = 'ClientChapter.ClientChapter';

        export namespace Fields {
            export declare const ClientChapterSKey;
            export declare const ClientId;
            export declare const ChapterCode;
            export declare const ChapterName;
            export declare const ClientLevel1;
            export declare const ClientLevel2;
            export declare const ClientLevel3;
            export declare const ClientLevel4;
            export declare const EnvelopeLine1;
            export declare const EnvelopeLine2;
            export declare const EnvelopeLine3;
            export declare const EnvelopeLine4;
            export declare const EnvelopeLine5;
            export declare const EnvelopeClientName;
            export declare const ClientAddressLine1;
            export declare const ClientAddressLine2;
            export declare const ClientAddressLine3;
            export declare const ClientCity;
            export declare const ClientState;
            export declare const ClientZip;
            export declare const Uw;
            export declare const Commander;
            export declare const CommanderTitle;
            export declare const BillingChapter;
            export declare const AreaName;
            export declare const CommanderLastName;
            export declare const ClientPhone;
            export declare const ClientFax;
            export declare const ClientEmailAddress;
            export declare const OldChapterCode;
            export declare const CustomerBillingNumber;
            export declare const WebAddress;
            export declare const Region;
            export declare const Lockbox;
            export declare const UwBlackoutFromDate;
            export declare const UwBlackoutToDate;
            export declare const MdCoord;
            export declare const Commander2;
            export declare const CommanderTitle2;
            export declare const CommanderLastName2;
            export declare const BillingChapter2;
            export declare const ClientEmailAddress2;
            export declare const MspThank;
            export declare const LastThankYouDate;
            export declare const SeedNames;
            export declare const OriginalName;
            export declare const ClientName;
            export declare const ChapterDesignation;
            export declare const Division;
            export declare const Active;
            export declare const Vertical;
            export declare const ClientActiveDate;
            export declare const FiscalYearBegins;
            export declare const Flex1;
            export declare const Flex2;
            export declare const Flex3;
            export declare const Flex4;
            export declare const Flex5;
            export declare const CreateDate;
            export declare const ModifiedDate;
            export declare const CreatedBy;
            export declare const ModifiedBy;
        }

        [
            'ClientChapterSKey',
            'ClientId',
            'ChapterCode',
            'ChapterName',
            'ClientLevel1',
            'ClientLevel2',
            'ClientLevel3',
            'ClientLevel4',
            'EnvelopeLine1',
            'EnvelopeLine2',
            'EnvelopeLine3',
            'EnvelopeLine4',
            'EnvelopeLine5',
            'EnvelopeClientName',
            'ClientAddressLine1',
            'ClientAddressLine2',
            'ClientAddressLine3',
            'ClientCity',
            'ClientState',
            'ClientZip',
            'Uw',
            'Commander',
            'CommanderTitle',
            'BillingChapter',
            'AreaName',
            'CommanderLastName',
            'ClientPhone',
            'ClientFax',
            'ClientEmailAddress',
            'OldChapterCode',
            'CustomerBillingNumber',
            'WebAddress',
            'Region',
            'Lockbox',
            'UwBlackoutFromDate',
            'UwBlackoutToDate',
            'MdCoord',
            'Commander2',
            'CommanderTitle2',
            'CommanderLastName2',
            'BillingChapter2',
            'ClientEmailAddress2',
            'MspThank',
            'LastThankYouDate',
            'SeedNames',
            'OriginalName',
            'ClientName',
            'ChapterDesignation',
            'Division',
            'Active',
            'Vertical',
            'ClientActiveDate',
            'FiscalYearBegins',
            'Flex1',
            'Flex2',
            'Flex3',
            'Flex4',
            'Flex5',
            'CreateDate',
            'ModifiedDate',
            'CreatedBy',
            'ModifiedBy'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}