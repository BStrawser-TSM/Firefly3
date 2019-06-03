
namespace Firefly3.ClientChapter {
    export class ClientChapterForm extends Serenity.PrefixedContext {
        static formKey = 'ClientChapter.ClientChapter';
    }

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
        CreateDate: Serenity.DateEditor;
        ModifiedDate: Serenity.DateEditor;
        CreatedBy: Serenity.StringEditor;
        ModifiedBy: Serenity.StringEditor;
    }

    [,
        ['ClientId', () => Serenity.StringEditor],
        ['ChapterCode', () => Serenity.StringEditor],
        ['ChapterName', () => Serenity.StringEditor],
        ['ClientLevel1', () => Serenity.StringEditor],
        ['ClientLevel2', () => Serenity.StringEditor],
        ['ClientLevel3', () => Serenity.StringEditor],
        ['ClientLevel4', () => Serenity.StringEditor],
        ['EnvelopeLine1', () => Serenity.StringEditor],
        ['EnvelopeLine2', () => Serenity.StringEditor],
        ['EnvelopeLine3', () => Serenity.StringEditor],
        ['EnvelopeLine4', () => Serenity.StringEditor],
        ['EnvelopeLine5', () => Serenity.StringEditor],
        ['EnvelopeClientName', () => Serenity.StringEditor],
        ['ClientAddressLine1', () => Serenity.StringEditor],
        ['ClientAddressLine2', () => Serenity.StringEditor],
        ['ClientAddressLine3', () => Serenity.StringEditor],
        ['ClientCity', () => Serenity.StringEditor],
        ['ClientState', () => Serenity.StringEditor],
        ['ClientZip', () => Serenity.StringEditor],
        ['Uw', () => Serenity.StringEditor],
        ['Commander', () => Serenity.StringEditor],
        ['CommanderTitle', () => Serenity.StringEditor],
        ['BillingChapter', () => Serenity.StringEditor],
        ['AreaName', () => Serenity.StringEditor],
        ['CommanderLastName', () => Serenity.StringEditor],
        ['ClientPhone', () => Serenity.StringEditor],
        ['ClientFax', () => Serenity.StringEditor],
        ['ClientEmailAddress', () => Serenity.StringEditor],
        ['OldChapterCode', () => Serenity.StringEditor],
        ['CustomerBillingNumber', () => Serenity.StringEditor],
        ['WebAddress', () => Serenity.StringEditor],
        ['Region', () => Serenity.StringEditor],
        ['Lockbox', () => Serenity.BooleanEditor],
        ['UwBlackoutFromDate', () => Serenity.DateEditor],
        ['UwBlackoutToDate', () => Serenity.DateEditor],
        ['MdCoord', () => Serenity.StringEditor],
        ['Commander2', () => Serenity.StringEditor],
        ['CommanderTitle2', () => Serenity.StringEditor],
        ['CommanderLastName2', () => Serenity.StringEditor],
        ['BillingChapter2', () => Serenity.StringEditor],
        ['ClientEmailAddress2', () => Serenity.StringEditor],
        ['MspThank', () => Serenity.BooleanEditor],
        ['LastThankYouDate', () => Serenity.DateEditor],
        ['SeedNames', () => Serenity.BooleanEditor],
        ['OriginalName', () => Serenity.StringEditor],
        ['ClientName', () => Serenity.StringEditor],
        ['ChapterDesignation', () => Serenity.StringEditor],
        ['Division', () => Serenity.StringEditor],
        ['Active', () => Serenity.BooleanEditor],
        ['Vertical', () => Serenity.StringEditor],
        ['ClientActiveDate', () => Serenity.DateEditor],
        ['FiscalYearBegins', () => Serenity.DateEditor],
        ['Flex1', () => Serenity.StringEditor],
        ['Flex2', () => Serenity.StringEditor],
        ['Flex3', () => Serenity.StringEditor],
        ['Flex4', () => Serenity.StringEditor],
        ['Flex5', () => Serenity.StringEditor],
        ['CreateDate', () => Serenity.DateEditor],
        ['ModifiedDate', () => Serenity.DateEditor],
        ['CreatedBy', () => Serenity.StringEditor],
        ['ModifiedBy', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(ClientChapterForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}