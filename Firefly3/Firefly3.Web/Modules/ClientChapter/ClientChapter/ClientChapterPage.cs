
namespace Firefly3.ClientChapter.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ClientChapter/ClientChapter"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ClientChapterRow))]
    public class ClientChapterController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/ClientChapter/ClientChapter/ClientChapterIndex.cshtml");
        }
    }
}