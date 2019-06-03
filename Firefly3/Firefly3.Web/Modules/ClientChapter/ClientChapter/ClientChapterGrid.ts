
namespace Firefly3.ClientChapter {

    @Serenity.Decorators.registerClass()
    export class ClientChapterGrid extends Serenity.EntityGrid<ClientChapterRow, any> {
        protected getColumnsKey() { return 'ClientChapter.ClientChapter'; }
        protected getDialogType() { return ClientChapterDialog; }
        protected getIdProperty() { return ClientChapterRow.idProperty; }
        protected getLocalTextPrefix() { return ClientChapterRow.localTextPrefix; }
        protected getService() { return ClientChapterService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}