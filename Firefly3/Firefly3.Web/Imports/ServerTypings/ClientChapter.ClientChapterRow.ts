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

        export declare const enum Fields {
            ClientChapterSKey = "ClientChapterSKey",
            ClientId = "ClientId",
            ChapterCode = "ChapterCode",
            ChapterName = "ChapterName",
            ClientLevel1 = "ClientLevel1",
            ClientLevel2 = "ClientLevel2",
            ClientLevel3 = "ClientLevel3",
            ClientLevel4 = "ClientLevel4",
            EnvelopeLine1 = "EnvelopeLine1",
            EnvelopeLine2 = "EnvelopeLine2",
            EnvelopeLine3 = "EnvelopeLine3",
            EnvelopeLine4 = "EnvelopeLine4",
            EnvelopeLine5 = "EnvelopeLine5",
            EnvelopeClientName = "EnvelopeClientName",
            ClientAddressLine1 = "ClientAddressLine1",
            ClientAddressLine2 = "ClientAddressLine2",
            ClientAddressLine3 = "ClientAddressLine3",
            ClientCity = "ClientCity",
            ClientState = "ClientState",
            ClientZip = "ClientZip",
            Uw = "Uw",
            Commander = "Commander",
            CommanderTitle = "CommanderTitle",
            BillingChapter = "BillingChapter",
            AreaName = "AreaName",
            CommanderLastName = "CommanderLastName",
            ClientPhone = "ClientPhone",
            ClientFax = "ClientFax",
            ClientEmailAddress = "ClientEmailAddress",
            OldChapterCode = "OldChapterCode",
            CustomerBillingNumber = "CustomerBillingNumber",
            WebAddress = "WebAddress",
            Region = "Region",
            Lockbox = "Lockbox",
            UwBlackoutFromDate = "UwBlackoutFromDate",
            UwBlackoutToDate = "UwBlackoutToDate",
            MdCoord = "MdCoord",
            Commander2 = "Commander2",
            CommanderTitle2 = "CommanderTitle2",
            CommanderLastName2 = "CommanderLastName2",
            BillingChapter2 = "BillingChapter2",
            ClientEmailAddress2 = "ClientEmailAddress2",
            MspThank = "MspThank",
            LastThankYouDate = "LastThankYouDate",
            SeedNames = "SeedNames",
            OriginalName = "OriginalName",
            ClientName = "ClientName",
            ChapterDesignation = "ChapterDesignation",
            Division = "Division",
            Active = "Active",
            Vertical = "Vertical",
            ClientActiveDate = "ClientActiveDate",
            FiscalYearBegins = "FiscalYearBegins",
            Flex1 = "Flex1",
            Flex2 = "Flex2",
            Flex3 = "Flex3",
            Flex4 = "Flex4",
            Flex5 = "Flex5",
            CreateDate = "CreateDate",
            ModifiedDate = "ModifiedDate",
            CreatedBy = "CreatedBy",
            ModifiedBy = "ModifiedBy"
        }
    }
}

