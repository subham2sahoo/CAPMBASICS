using from '@sap/cds-common-content';
using db from '../db/model';


service bookshop {

    entity books as projection on db.Books;
    entity author as projection on db.Authors;
    entity Orders as projection on db.Orders;
    // entity OrderItems as projection on db.OrderItems;

}