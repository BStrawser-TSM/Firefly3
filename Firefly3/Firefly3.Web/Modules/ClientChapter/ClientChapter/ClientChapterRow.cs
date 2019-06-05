
namespace Firefly3.ClientChapter.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("ClientChapter"), Module("ClientChapter"), TableName("[cc].[ClientChapter]")]
    [DisplayName("Client Chapter"), InstanceName("Client Chapter")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ClientChapterRow : Row, IIdRow, INameRow
    {
        [DisplayName("Client Chapter S Key"), Identity]
        public Int32? ClientChapterSKey
        {
            get { return Fields.ClientChapterSKey[this]; }
            set { Fields.ClientChapterSKey[this] = value; }
        }

        [DisplayName("Client Id"), Column("ClientID"), Size(6), QuickSearch]
        public String ClientId
        {
            get { return Fields.ClientId[this]; }
            set { Fields.ClientId[this] = value; }
        }

        [DisplayName("Chapter Code"), Size(20), QuickSearch]
        public String ChapterCode
        {
            get { return Fields.ChapterCode[this]; }
            set { Fields.ChapterCode[this] = value; }
        }

        [DisplayName("Chapter Name"), Size(50)]
        public String ChapterName
        {
            get { return Fields.ChapterName[this]; }
            set { Fields.ChapterName[this] = value; }
        }

        [DisplayName("Client Level1"), Size(20)]
        public String ClientLevel1
        {
            get { return Fields.ClientLevel1[this]; }
            set { Fields.ClientLevel1[this] = value; }
        }

        [DisplayName("Client Level2"), Size(30)]
        public String ClientLevel2
        {
            get { return Fields.ClientLevel2[this]; }
            set { Fields.ClientLevel2[this] = value; }
        }

        [DisplayName("Client Level3"), Size(20)]
        public String ClientLevel3
        {
            get { return Fields.ClientLevel3[this]; }
            set { Fields.ClientLevel3[this] = value; }
        }

        [DisplayName("Client Level4"), Size(35)]
        public String ClientLevel4
        {
            get { return Fields.ClientLevel4[this]; }
            set { Fields.ClientLevel4[this] = value; }
        }

        [DisplayName("Envelope Line1"), Size(50)]
        public String EnvelopeLine1
        {
            get { return Fields.EnvelopeLine1[this]; }
            set { Fields.EnvelopeLine1[this] = value; }
        }

        [DisplayName("Envelope Line2"), Size(50)]
        public String EnvelopeLine2
        {
            get { return Fields.EnvelopeLine2[this]; }
            set { Fields.EnvelopeLine2[this] = value; }
        }

        [DisplayName("Envelope Line3"), Size(50)]
        public String EnvelopeLine3
        {
            get { return Fields.EnvelopeLine3[this]; }
            set { Fields.EnvelopeLine3[this] = value; }
        }

        [DisplayName("Envelope Line4"), Size(50)]
        public String EnvelopeLine4
        {
            get { return Fields.EnvelopeLine4[this]; }
            set { Fields.EnvelopeLine4[this] = value; }
        }

        [DisplayName("Envelope Line5"), Size(50)]
        public String EnvelopeLine5
        {
            get { return Fields.EnvelopeLine5[this]; }
            set { Fields.EnvelopeLine5[this] = value; }
        }

        [DisplayName("Envelope Client Name"), Size(50)]
        public String EnvelopeClientName
        {
            get { return Fields.EnvelopeClientName[this]; }
            set { Fields.EnvelopeClientName[this] = value; }
        }

        [DisplayName("Client Address Line1"), Size(50)]
        public String ClientAddressLine1
        {
            get { return Fields.ClientAddressLine1[this]; }
            set { Fields.ClientAddressLine1[this] = value; }
        }

        [DisplayName("Client Address Line2"), Size(50)]
        public String ClientAddressLine2
        {
            get { return Fields.ClientAddressLine2[this]; }
            set { Fields.ClientAddressLine2[this] = value; }
        }

        [DisplayName("Client Address Line3"), Size(50)]
        public String ClientAddressLine3
        {
            get { return Fields.ClientAddressLine3[this]; }
            set { Fields.ClientAddressLine3[this] = value; }
        }

        [DisplayName("Client City"), Size(50)]
        public String ClientCity
        {
            get { return Fields.ClientCity[this]; }
            set { Fields.ClientCity[this] = value; }
        }

        [DisplayName("Client State"), Size(2)]
        public String ClientState
        {
            get { return Fields.ClientState[this]; }
            set { Fields.ClientState[this] = value; }
        }

        [DisplayName("Client Zip"), Size(12)]
        public String ClientZip
        {
            get { return Fields.ClientZip[this]; }
            set { Fields.ClientZip[this] = value; }
        }

        [DisplayName("Uw"), Size(50)]
        public String Uw
        {
            get { return Fields.Uw[this]; }
            set { Fields.Uw[this] = value; }
        }

        [DisplayName("Commander"), Size(50)]
        public String Commander
        {
            get { return Fields.Commander[this]; }
            set { Fields.Commander[this] = value; }
        }

        [DisplayName("Commander Title"), Size(50)]
        public String CommanderTitle
        {
            get { return Fields.CommanderTitle[this]; }
            set { Fields.CommanderTitle[this] = value; }
        }

        [DisplayName("Billing Chapter"), Size(50)]
        public String BillingChapter
        {
            get { return Fields.BillingChapter[this]; }
            set { Fields.BillingChapter[this] = value; }
        }

        [DisplayName("Area Name"), Size(50)]
        public String AreaName
        {
            get { return Fields.AreaName[this]; }
            set { Fields.AreaName[this] = value; }
        }

        [DisplayName("Commander Last Name"), Size(50)]
        public String CommanderLastName
        {
            get { return Fields.CommanderLastName[this]; }
            set { Fields.CommanderLastName[this] = value; }
        }

        [DisplayName("Client Phone"), Size(50)]
        public String ClientPhone
        {
            get { return Fields.ClientPhone[this]; }
            set { Fields.ClientPhone[this] = value; }
        }

        [DisplayName("Client Fax"), Size(20)]
        public String ClientFax
        {
            get { return Fields.ClientFax[this]; }
            set { Fields.ClientFax[this] = value; }
        }

        [DisplayName("Client Email Address"), Size(100)]
        public String ClientEmailAddress
        {
            get { return Fields.ClientEmailAddress[this]; }
            set { Fields.ClientEmailAddress[this] = value; }
        }

        [DisplayName("Old Chapter Code"), Size(50)]
        public String OldChapterCode
        {
            get { return Fields.OldChapterCode[this]; }
            set { Fields.OldChapterCode[this] = value; }
        }

        [DisplayName("Customer Billing Number"), Size(50)]
        public String CustomerBillingNumber
        {
            get { return Fields.CustomerBillingNumber[this]; }
            set { Fields.CustomerBillingNumber[this] = value; }
        }

        [DisplayName("Web Address"), Size(50)]
        public String WebAddress
        {
            get { return Fields.WebAddress[this]; }
            set { Fields.WebAddress[this] = value; }
        }

        [DisplayName("Region"), Size(50)]
        public String Region
        {
            get { return Fields.Region[this]; }
            set { Fields.Region[this] = value; }
        }

        [DisplayName("Lockbox")]
        public Boolean? Lockbox
        {
            get { return Fields.Lockbox[this]; }
            set { Fields.Lockbox[this] = value; }
        }

        [DisplayName("Uw Blackout From Date")]
        public DateTime? UwBlackoutFromDate
        {
            get { return Fields.UwBlackoutFromDate[this]; }
            set { Fields.UwBlackoutFromDate[this] = value; }
        }

        [DisplayName("Uw Blackout To Date")]
        public DateTime? UwBlackoutToDate
        {
            get { return Fields.UwBlackoutToDate[this]; }
            set { Fields.UwBlackoutToDate[this] = value; }
        }

        [DisplayName("Md Coord"), Column("MD_COORD"), Size(50)]
        public String MdCoord
        {
            get { return Fields.MdCoord[this]; }
            set { Fields.MdCoord[this] = value; }
        }

        [DisplayName("Commander2"), Size(50)]
        public String Commander2
        {
            get { return Fields.Commander2[this]; }
            set { Fields.Commander2[this] = value; }
        }

        [DisplayName("Commander Title2"), Size(50)]
        public String CommanderTitle2
        {
            get { return Fields.CommanderTitle2[this]; }
            set { Fields.CommanderTitle2[this] = value; }
        }

        [DisplayName("Commander Last Name2"), Size(50)]
        public String CommanderLastName2
        {
            get { return Fields.CommanderLastName2[this]; }
            set { Fields.CommanderLastName2[this] = value; }
        }

        [DisplayName("Billing Chapter2"), Size(50)]
        public String BillingChapter2
        {
            get { return Fields.BillingChapter2[this]; }
            set { Fields.BillingChapter2[this] = value; }
        }

        [DisplayName("Client Email Address2"), Size(100)]
        public String ClientEmailAddress2
        {
            get { return Fields.ClientEmailAddress2[this]; }
            set { Fields.ClientEmailAddress2[this] = value; }
        }

        [DisplayName("Msp Thank")]
        public Boolean? MspThank
        {
            get { return Fields.MspThank[this]; }
            set { Fields.MspThank[this] = value; }
        }

        [DisplayName("Last Thank You Date")]
        public DateTime? LastThankYouDate
        {
            get { return Fields.LastThankYouDate[this]; }
            set { Fields.LastThankYouDate[this] = value; }
        }

        [DisplayName("Seed Names")]
        public Boolean? SeedNames
        {
            get { return Fields.SeedNames[this]; }
            set { Fields.SeedNames[this] = value; }
        }

        [DisplayName("Original Name"), Size(50)]
        public String OriginalName
        {
            get { return Fields.OriginalName[this]; }
            set { Fields.OriginalName[this] = value; }
        }

        [DisplayName("Client Name"), Size(50)]
        public String ClientName
        {
            get { return Fields.ClientName[this]; }
            set { Fields.ClientName[this] = value; }
        }

        [DisplayName("Chapter Designation"), Size(50)]
        public String ChapterDesignation
        {
            get { return Fields.ChapterDesignation[this]; }
            set { Fields.ChapterDesignation[this] = value; }
        }

        [DisplayName("Division"), Size(50)]
        public String Division
        {
            get { return Fields.Division[this]; }
            set { Fields.Division[this] = value; }
        }

        [DisplayName("Active")]
        public Boolean? Active
        {
            get { return Fields.Active[this]; }
            set { Fields.Active[this] = value; }
        }

        [DisplayName("Vertical"), Size(50)]
        public String Vertical
        {
            get { return Fields.Vertical[this]; }
            set { Fields.Vertical[this] = value; }
        }

        [DisplayName("Client Active Date")]
        public DateTime? ClientActiveDate
        {
            get { return Fields.ClientActiveDate[this]; }
            set { Fields.ClientActiveDate[this] = value; }
        }

        [DisplayName("Fiscal Year Begins")]
        public DateTime? FiscalYearBegins
        {
            get { return Fields.FiscalYearBegins[this]; }
            set { Fields.FiscalYearBegins[this] = value; }
        }

        [DisplayName("Flex1"), Size(100)]
        public String Flex1
        {
            get { return Fields.Flex1[this]; }
            set { Fields.Flex1[this] = value; }
        }

        [DisplayName("Flex2"), Size(100)]
        public String Flex2
        {
            get { return Fields.Flex2[this]; }
            set { Fields.Flex2[this] = value; }
        }

        [DisplayName("Flex3"), Size(100)]
        public String Flex3
        {
            get { return Fields.Flex3[this]; }
            set { Fields.Flex3[this] = value; }
        }

        [DisplayName("Flex4"), Size(100)]
        public String Flex4
        {
            get { return Fields.Flex4[this]; }
            set { Fields.Flex4[this] = value; }
        }

        [DisplayName("Flex5"), Size(100)]
        public String Flex5
        {
            get { return Fields.Flex5[this]; }
            set { Fields.Flex5[this] = value; }
        }

        [DisplayName("Create Date")]
        public DateTime? CreateDate
        {
            get { return Fields.CreateDate[this]; }
            set { Fields.CreateDate[this] = value; }
        }

        [DisplayName("Modified Date")]
        public DateTime? ModifiedDate
        {
            get { return Fields.ModifiedDate[this]; }
            set { Fields.ModifiedDate[this] = value; }
        }

        [DisplayName("Created By"), Size(50)]
        public String CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Modified By"), Size(50)]
        public String ModifiedBy
        {
            get { return Fields.ModifiedBy[this]; }
            set { Fields.ModifiedBy[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ClientChapterSKey; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ClientId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ClientChapterRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ClientChapterSKey;
            public StringField ClientId;
            public StringField ChapterCode;
            public StringField ChapterName;
            public StringField ClientLevel1;
            public StringField ClientLevel2;
            public StringField ClientLevel3;
            public StringField ClientLevel4;
            public StringField EnvelopeLine1;
            public StringField EnvelopeLine2;
            public StringField EnvelopeLine3;
            public StringField EnvelopeLine4;
            public StringField EnvelopeLine5;
            public StringField EnvelopeClientName;
            public StringField ClientAddressLine1;
            public StringField ClientAddressLine2;
            public StringField ClientAddressLine3;
            public StringField ClientCity;
            public StringField ClientState;
            public StringField ClientZip;
            public StringField Uw;
            public StringField Commander;
            public StringField CommanderTitle;
            public StringField BillingChapter;
            public StringField AreaName;
            public StringField CommanderLastName;
            public StringField ClientPhone;
            public StringField ClientFax;
            public StringField ClientEmailAddress;
            public StringField OldChapterCode;
            public StringField CustomerBillingNumber;
            public StringField WebAddress;
            public StringField Region;
            public BooleanField Lockbox;
            public DateTimeField UwBlackoutFromDate;
            public DateTimeField UwBlackoutToDate;
            public StringField MdCoord;
            public StringField Commander2;
            public StringField CommanderTitle2;
            public StringField CommanderLastName2;
            public StringField BillingChapter2;
            public StringField ClientEmailAddress2;
            public BooleanField MspThank;
            public DateTimeField LastThankYouDate;
            public BooleanField SeedNames;
            public StringField OriginalName;
            public StringField ClientName;
            public StringField ChapterDesignation;
            public StringField Division;
            public BooleanField Active;
            public StringField Vertical;
            public DateTimeField ClientActiveDate;
            public DateTimeField FiscalYearBegins;
            public StringField Flex1;
            public StringField Flex2;
            public StringField Flex3;
            public StringField Flex4;
            public StringField Flex5;
            public DateTimeField CreateDate;
            public DateTimeField ModifiedDate;
            public StringField CreatedBy;
            public StringField ModifiedBy;
        }
    }
}
