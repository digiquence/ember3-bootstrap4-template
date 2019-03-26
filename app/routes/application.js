import Route from '@ember/routing/route';
import { scheduleOnce } from '@ember/runloop';
import RSVP from 'rsvp';
import $ from 'jquery';

export default Route.extend({
    model() {
        var store = this.store;
        var allMenuItems = [];

        allMenuItems.push(store.createRecord("menu-item", { id: 1, route: "forms", icon: "icon-flag", label: "Forms" }));
        allMenuItems.push(store.createRecord("menu-item", { id: 2, route: "buttons", icon: "icon-grid", label: "Buttons" }));
        allMenuItems.push(store.createRecord("menu-item", { id: 3, route: "typography", icon: "icon-pencil", label: "Typography" }));

        return RSVP.hash({
            menuItems: allMenuItems,
            userName: "Raul",
            versionNumber: "1.0.0"
        });
    },
    actions: {
        didTransition() {
            scheduleOnce('afterRender', this, () => {
                $(".form-check label,.form-radio label").append('<i class="input-helper"></i>');
            });
        },
    }
});
