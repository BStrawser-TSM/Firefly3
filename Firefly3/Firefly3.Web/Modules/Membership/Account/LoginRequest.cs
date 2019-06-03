
namespace Firefly3.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;

    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow))]
    public class LoginRequest : ServiceRequest
    {
        [Placeholder("default username is 'admin'")]
        public string Username = "admin";
        [PasswordEditor, Placeholder("default password for 'admin' is 'serenity'"), Required(true)]
        public string Password = "serenity";
    }
}