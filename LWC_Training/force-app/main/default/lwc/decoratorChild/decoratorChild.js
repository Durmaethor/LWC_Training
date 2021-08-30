import { LightningElement,api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class DecoratorChild extends NavigationMixin(LightningElement) {

    @api contact;

    @api
    navigateToPage() {
        this[NavigationMixin.GenerateUrl] ({
            type: "standard__recordPage",
            attributes: {
                recordId: this.contact.Id,
                objectApiName: 'Contact',
                actionName: 'view'
            }
        }).then(url => {
            window.open(url, this.contact.Name, "_new");
        });
    }

}