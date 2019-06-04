namespace Firefly3.ClientChapter {
    export interface ClientChapterForm {
        ClientId: Serenity.StringEditor;
        ChapterCode: Serenity.StringEditor;
        ChapterName: Serenity.StringEditor;
        ClientLevel1: Serenity.StringEditor;
        ClientLevel2: Serenity.StringEditor;
        ClientLevel3: Serenity.StringEditor;
        ClientLevel4: Serenity.StringEditor;
        EnvelopeLine1: Serenity.StringEditor;
        EnvelopeLine2: Serenity.StringEditor;
        EnvelopeLine3: Serenity.StringEditor;
        EnvelopeLine4: Serenity.StringEditor;
        EnvelopeLine5: Serenity.StringEditor;
        EnvelopeClientName: Serenity.StringEditor;
        ClientAddressLine1: Serenity.StringEditor;
        ClientAddressLine2: Serenity.StringEditor;
        ClientAddressLine3: Serenity.StringEditor;
        ClientCity: Serenity.StringEditor;
        ClientState: Serenity.StringEditor;
        ClientZip: Serenity.StringEditor;
        Uw: Serenity.StringEditor;
        Commander: Serenity.StringEditor;
        CommanderTitle: Serenity.StringEditor;
        BillingChapter: Serenity.StringEditor;
        AreaName: Serenity.StringEditor;
        CommanderLastName: Serenity.StringEditor;
        ClientPhone: Serenity.StringEditor;
        ClientFax: Serenity.StringEditor;
        ClientEmailAddress: Serenity.StringEditor;
        OldChapterCode: Serenity.StringEditor;
        CustomerBillingNumber: Serenity.StringEditor;
        WebAddress: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        Lockbox: Serenity.BooleanEditor;
        UwBlackoutFromDate: Serenity.DateEditor;
        UwBlackoutToDate: Serenity.DateEditor;
        MdCoord: Serenity.StringEditor;
        Commander2: Serenity.StringEditor;
        CommanderTitle2: Serenity.StringEditor;
        CommanderLastName2: Serenity.StringEditor;
        BillingChapter2: Serenity.StringEditor;
        ClientEmailAddress2: Serenity.StringEditor;
        MspThank: Serenity.BooleanEditor;
        LastThankYouDate: Serenity.DateEditor;
        SeedNames: Serenity.BooleanEditor;
        OriginalName: Serenity.StringEditor;
        ClientName: Serenity.StringEditor;
        ChapterDesignation: Serenity.StringEditor;
        Division: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        Vertical: Serenity.StringEditor;
        ClientActiveDate: Serenity.DateEditor;
        FiscalYearBegins: Serenity.DateEditor;
        Flex1: Serenity.StringEditor;
        Flex2: Serenity.StringEditor;
        Flex3: Serenity.StringEditor;
        Flex4: Serenity.StringEditor;
        Flex5: Serenity.StringEditor;
    }

    export class ClientChapterForm extends Serenity.PrefixedContext {
        static formKey = 'ClientChapter.ClientChapter';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClientChapterForm.init)  {
                ClientChapterForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.DateEditor;

                Q.initFormType(ClientChapterForm, [
                    'ClientId', w0,
                    'ChapterCode', w0,
                    'ChapterName', w0,
                    'ClientLevel1', w0,
                    'ClientLevel2', w0,
                    'ClientLevel3', w0,
                    'ClientLevel4', w0,
                    'EnvelopeLine1', w0,
                    'EnvelopeLine2', w0,
                    'EnvelopeLine3', w0,
                    'EnvelopeLine4', w0,
                    'EnvelopeLine5', w0,
                    'EnvelopeClientName', w0,
                    'ClientAddressLine1', w0,
                    'ClientAddressLine2', w0,
                    'ClientAddressLine3', w0,
                    'ClientCity', w0,
                    'ClientState', w0,
                    'ClientZip', w0,
                    'Uw', w0,
                    'Commander', w0,
                    'CommanderTitle', w0,
                    'BillingChapter', w0,
                    'AreaName', w0,
                    'CommanderLastName', w0,
                    'ClientPhone', w0,
                    'ClientFax', w0,
                    'ClientEmailAddress', w0,
                    'OldChapterCode', w0,
                    'CustomerBillingNumber', w0,
                    'WebAddress', w0,
                    'Region', w0,
                    'Lockbox', w1,
                    'UwBlackoutFromDate', w2,
                    'UwBlackoutToDate', w2,
                    'MdCoord', w0,
                    'Commander2', w0,
                    'CommanderTitle2', w0,
                    'CommanderLastName2', w0,
                    'BillingChapter2', w0,
                    'ClientEmailAddress2', w0,
                    'MspThank', w1,
                    'LastThankYouDate', w2,
                    'SeedNames', w1,
                    'OriginalName', w0,
                    'ClientName', w0,
                    'ChapterDesignation', w0,
                    'Division', w0,
                    'Active', w1,
                    'Vertical', w0,
                    'ClientActiveDate', w2,
                    'FiscalYearBegins', w2,
                    'Flex1', w0,
                    'Flex2', w0,
                    'Flex3', w0,
                    'Flex4', w0,
                    'Flex5', w0
                ]);
            }
        }
    }
}

