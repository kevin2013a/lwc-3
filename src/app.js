import { LightningElement } from 'lwc';

export default class InsertOppLWC extends LightningElement {
visivel = false;
recordId;

handleSuccess (event){
this.recordId = event.detail.id;
this.visivel = true;
}

}