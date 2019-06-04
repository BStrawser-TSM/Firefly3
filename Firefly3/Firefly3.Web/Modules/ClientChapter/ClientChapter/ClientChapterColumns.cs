
namespace Firefly3.ClientChapter.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ClientChapter.ClientChapter")]
    [BasedOnRow(typeof(Entities.ClientChapterRow), CheckNames = true)]
    public class ClientChapterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ClientChapterSKey { get; set; }
        [EditLink]
        public String ClientId { get; set; }
        [EditLink]
        public String ChapterCode { get; set; }
        [EditLink]
        public String ChapterName { get; set; }
        [EditLink]
        public String ClientLevel1 { get; set; }
        [EditLink]
        public String ClientLevel2 { get; set; }
        [EditLink]
        public String ClientLevel3 { get; set; }
        [EditLink]
        public String ClientLevel4 { get; set; }
        [EditLink]
        public String EnvelopeLine1 { get; set; }
        [EditLink]
        public String EnvelopeLine2 { get; set; }
        [EditLink]
        public String EnvelopeLine3 { get; set; }
        [EditLink]
        public String EnvelopeLine4 { get; set; }
        [EditLink]
        public String EnvelopeLine5 { get; set; }
        [EditLink]
        public String EnvelopeClientName { get; set; }
        [EditLink]
        public String ClientAddressLine1 { get; set; }
        [EditLink]
        public String ClientAddressLine2 { get; set; }
        [EditLink]
        public String ClientAddressLine3 { get; set; }
        [EditLink]
        public String ClientCity { get; set; }
        [EditLink]
        public String ClientState { get; set; }
        [EditLink]
        public String ClientZip { get; set; }
        [EditLink]
        public String Uw { get; set; }
        [EditLink]
        public String Commander { get; set; }
        [EditLink]
        public String CommanderTitle { get; set; }
        [EditLink]
        public String BillingChapter { get; set; }
        [EditLink]
        public String AreaName { get; set; }
        [EditLink]
        public String CommanderLastName { get; set; }
        [EditLink]
        public String ClientPhone { get; set; }
        [EditLink]
        public String ClientFax { get; set; }
        [EditLink]
        public String ClientEmailAddress { get; set; }
        [EditLink]
        public String OldChapterCode { get; set; }
        [EditLink]
        public String CustomerBillingNumber { get; set; }
        [EditLink]
        public String WebAddress { get; set; }
        [EditLink]
        public String Region { get; set; }
        [EditLink]
        public Boolean Lockbox { get; set; }
        [EditLink]
        public DateTime UwBlackoutFromDate { get; set; }
        [EditLink]
        public DateTime UwBlackoutToDate { get; set; }
        [EditLink]
        public String MdCoord { get; set; }
        [EditLink]
        public String Commander2 { get; set; }
        [EditLink]
        public String CommanderTitle2 { get; set; }
        [EditLink]
        public String CommanderLastName2 { get; set; }
        [EditLink]
        public String BillingChapter2 { get; set; }
        [EditLink]
        public String ClientEmailAddress2 { get; set; }
        [EditLink]
        public Boolean MspThank { get; set; }
        [EditLink]
        public DateTime LastThankYouDate { get; set; }
        [EditLink]
        public Boolean SeedNames { get; set; }
        [EditLink]
        public String OriginalName { get; set; }
        [EditLink]
        public String ClientName { get; set; }
        [EditLink]
        public String ChapterDesignation { get; set; }
        [EditLink]
        public String Division { get; set; }
        [EditLink]
        public Boolean Active { get; set; }
        [EditLink]
        public Int32? Vertical { get; set; }
        [EditLink]
        public DateTime ClientActiveDate { get; set; }
        [EditLink]
        public DateTime FiscalYearBegins { get; set; }
        [EditLink]
        public String Flex1 { get; set; }
        [EditLink]
        public String Flex2 { get; set; }
        [EditLink]
        public String Flex3 { get; set; }
        [EditLink]
        public String Flex4 { get; set; }
        [EditLink]
        public String Flex5 { get; set; }
        [EditLink]
        public DateTime CreateDate { get; set; }
        [EditLink]
        public DateTime ModifiedDate { get; set; }
        [EditLink]
        public String CreatedBy { get; set; }
        [EditLink]
        public String ModifiedBy { get; set; }
    }
}