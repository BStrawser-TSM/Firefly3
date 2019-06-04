
namespace Firefly3.ClientChapter.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("ClientChapter"), Module("ClientChapter"), TableName("[cc].[DropDownLookups]")]
    [DisplayName("Drop Down Lookups"), InstanceName("Drop Down Lookups")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class DropDownLookupsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Drop Down Lookups S Key"), Identity]
        public Int32? DropDownLookupsSKey
        {
            get { return Fields.DropDownLookupsSKey[this]; }
            set { Fields.DropDownLookupsSKey[this] = value; }
        }

        [DisplayName("Drop Down Field"), Size(50), QuickSearch]
        public String DropDownField
        {
            get { return Fields.DropDownField[this]; }
            set { Fields.DropDownField[this] = value; }
        }

        [DisplayName("Dropdown Value"), Size(50)]
        public String DropdownValue
        {
            get { return Fields.DropdownValue[this]; }
            set { Fields.DropdownValue[this] = value; }
        }

        [DisplayName("Dropdown Sort")]
        public Int32? DropdownSort
        {
            get { return Fields.DropdownSort[this]; }
            set { Fields.DropdownSort[this] = value; }
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
            get { return Fields.DropDownLookupsSKey; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DropDownField; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DropDownLookupsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DropDownLookupsSKey;
            public StringField DropDownField;
            public StringField DropdownValue;
            public Int32Field DropdownSort;
            public DateTimeField CreateDate;
            public DateTimeField ModifiedDate;
            public StringField CreatedBy;
            public StringField ModifiedBy;
        }
    }
}
