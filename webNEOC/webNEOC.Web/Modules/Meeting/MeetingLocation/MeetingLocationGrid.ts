﻿
namespace webNEOC.Meeting {
    
    @Serenity.Decorators.registerClass()
    export class MeetingLocationGrid extends Serenity.EntityGrid<MeetingLocationRow, any> {
        protected getColumnsKey() { return 'Meeting.MeetingLocation'; }
        protected getDialogType() { return MeetingLocationDialog; }
        protected getIdProperty() { return MeetingLocationRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingLocationRow.localTextPrefix; }
        protected getService() { return MeetingLocationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "column-picker-button"), 1);
            return buttons;
        }
    }
}