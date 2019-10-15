import Component from '@ember/component';

export default Component.extend({
    isDescriptionVisible: false,

    actions: {
        toggleDescription(){
            this.toggleProperty('isDescriptionVisible');
        }
    }
});
