﻿using System.Web.Mvc;

namespace Firefly3
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            filters.Add(new Serenity.Services.AntiforgeryCookieResultFilter());
            filters.Add(new Serenity.Services.AutoValidateAntiforgeryTokenAttribute());
        }
    }
}