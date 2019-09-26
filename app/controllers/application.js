import Controller from '@ember/controller';

export default Controller.extend({
    
    init() {
        this._super(...arguments);
        this.customers = ["Diogenes"
        ,
        "Dion"
        ,
        "Dione"
        ,
        "Dionis"
        ,
        "Dionisio"
        ,
        "Dionne"
        ,
        "Dionysus"
        ,
        "Dippold"
        ,
        "Dira"
        ,
        "Dirk"
        ,
        "Disario"
        ,
        "Disharoon"
        ,
        "Disini"
        ,
        "Diskin"]
    },

    actions: {
        add() {
            this.customerdv.unshiftObject("customer");
        },
        remove() {
            this.customers.popObject();
        }
    }
});
