import { User } from './user.interface';


export interface Ticket {
    ticketId: number,
    user: User,
    requestType: string,
    priority: string,
    travelCity: string,
    fromLocationCity: string,
    travelStartDate : Date,
    travelEndDate : Date,
    passportNo :string,
    projectName : string,
    expenseBourneBy: string,
    travelApproverName: string
    expectedDuration : string,
    upperBoundAmount: string,
    additionalDetail : string,
    dateCreated : Date,
    lastUpdated : Date,
}