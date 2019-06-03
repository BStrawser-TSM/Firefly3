using Serenity.Navigation;
using MyPages = Firefly3.ClientChapter.Pages;

[assembly: NavigationMenu(9000, "Web Apps", icon: "fa-desktop")]
[assembly: NavigationLink(int.MaxValue, "Web Apps/Client Chapter",
    typeof(MyPages.ClientChapterController), icon: "fa-book")]