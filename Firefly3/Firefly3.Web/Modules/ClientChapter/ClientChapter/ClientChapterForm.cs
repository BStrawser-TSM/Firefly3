
namespace Firefly3.ClientChapter.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ClientChapter.ClientChapter")]
    [BasedOnRow(typeof(Entities.ClientChapterRow), CheckNames = true)]
    public class ClientChapterForm
    {
        public String ClientId { get; set; }
        public String ChapterCode { get; set; }
        public String ChapterName { get; set; }
        public String ClientLevel1 { get; set; }
        public String ClientLevel2 { get; set; }
        public String ClientLevel3 { get; set; }
        public String ClientLevel4 { get; set; }
        public String EnvelopeLine1 { get; set; }
        public String EnvelopeLine2 { get; set; }
        public String EnvelopeLine3 { get; set; }
        public String EnvelopeLine4 { get; set; }
        public String EnvelopeLine5 { get; set; }
        public String EnvelopeClientName { get; set; }
        public String ClientAddressLine1 { get; set; }
        public String ClientAddressLine2 { get; set; }
        public String ClientAddressLine3 { get; set; }
        public String ClientCity { get; set; }
        public String ClientState { get; set; }
        public String ClientZip { get; set; }
        public String Uw { get; set; }
        public String Commander { get; set; }
        public String CommanderTitle { get; set; }
        public String BillingChapter { get; set; }
        public String AreaName { get; set; }
        public String CommanderLastName { get; set; }
        public String ClientPhone { get; set; }
        public String ClientFax { get; set; }
        public String ClientEmailAddress { get; set; }
        public String OldChapterCode { get; set; }
        public String CustomerBillingNumber { get; set; }
        public String WebAddress { get; set; }
        public String Region { get; set; }
        public Boolean Lockbox { get; set; }
        public DateTime UwBlackoutFromDate { get; set; }
        public DateTime UwBlackoutToDate { get; set; }
        public String MdCoord { get; set; }
        public String Commander2 { get; set; }
        public String CommanderTitle2 { get; set; }
        public String CommanderLastName2 { get; set; }
        public String BillingChapter2 { get; set; }
        public String ClientEmailAddress2 { get; set; }
        public Boolean MspThank { get; set; }
        public DateTime LastThankYouDate { get; set; }
        public Boolean SeedNames { get; set; }
        public String OriginalName { get; set; }
        public String ClientName { get; set; }
        public String ChapterDesignation { get; set; }
        public String Division { get; set; }
        public Boolean Active { get; set; }
        public Int32? Vertical { get; set; }
        public DateTime ClientActiveDate { get; set; }
        public DateTime FiscalYearBegins { get; set; }
        public String Flex1 { get; set; }
        public String Flex2 { get; set; }
        public String Flex3 { get; set; }
        public String Flex4 { get; set; }
        public String Flex5 { get; set; }
    }
}