import { LightningElement, api } from 'lwc';

export default class DecoratorParent extends LightningElement {

    @api recordId;

    contacts = [
        {
            Id: "0036300000m1ktmAAA",
            Name: "Marc Benioff",
            Email: "marc@example.com",
            Mobile: "415-000-0000"
        },
        {
            Id: "0036300000m1kuhAAA",
            Name: "Jodi Wagner",
            Email: "jodi@example.com",
            Mobile: "415-111-1111"
        },
        {
            Id: "0036300000m1l4NAAQ",
            Name: "Stephan Chandler-Garcia",
            Email: "stephan@example.com",
            Mobile: "415-222-2222"
        }
    ];

    @api
    openAllRecords() {
        const childComponents = this.template.querySelectorAll("c-decorator-child");
        childComponents.forEach((component => {
            component.navigateToPage();
        }))
    }
}