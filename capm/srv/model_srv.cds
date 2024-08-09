using db from '../db/model';


service bookshop {

    // entity books as select from  db.Books where TITLE =  'Mostly Harmless';
    entity books as projection on  db.Books actions{
       function stock() returns Integer; //Bound Function
    };
    entity author as projection on db.Authors;
    entity Orders as projection on db.Orders;
    function totalStock() returns Integer;// UnBound Function

}