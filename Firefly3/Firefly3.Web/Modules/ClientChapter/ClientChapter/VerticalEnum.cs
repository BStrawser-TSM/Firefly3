using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.ComponentModel;
using System.ComponentModel;

namespace Firefly3.Modules.ClientChapter.ClientChapter
{
    [EnumKey("ClientChapter.VerticalEnum")]
    public enum VerticalEnum
    {
        [Description("TSA")]
        TSA = 1,
        [Description("McD")]
        McD = 2
    }
}