
namespace Firefly3.ClientChapter
{

    @Serenity.Decorators.registerClass()
    export class ClientChapterDialog extends Serenity.EntityDialog<ClientChapterRow, any>
    {
        protected getFormKey() { return ClientChapterForm.formKey; }
        protected getIdProperty() { return ClientChapterRow.idProperty; }
        protected getLocalTextPrefix() { return ClientChapterRow.localTextPrefix; }
        protected getNameProperty() { return ClientChapterRow.nameProperty; }
        protected getService() { return ClientChapterService.baseUrl; }

        protected form = new ClientChapterForm(this.idPrefix);

    }
}