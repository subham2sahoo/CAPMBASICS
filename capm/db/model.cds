namespace db;

aspect cuid {
  key ID : UUID;
}

// entity Books :cuid{
//     TITLE  : String;
//     author_foregin:type of Authors:ID;
//     author:Association to Authors on author.ID = author_foregin;
//     also_Author:Association  to Authors;
// }

entity Books : cuid {
  TITLE  : String;
  author : Association to Authors;
  stock:Integer;
}

// https://port4004-workspaces-ws-vzvpb.us10.trial.applicationstudio.cloud.sap/odata/v4/bookshop/books?$expand=author

entity Authors : cuid {
  NAME  : String;
  books : Association to many Books
            on books.author = $self;
}

/// https://port4004-workspaces-ws-vzvpb.us10.trial.applicationstudio.cloud.sap/odata/v4/bookshop/Orders?$expand=Items($expand=books)
/// https://port4004-workspaces-ws-vzvpb.us10.trial.applicationstudio.cloud.sap/odata/v4/bookshop/Orders(6091d4ab-650e-4afa-90bb-163305e473a2)?$expand=Items($expand=books)

entity Orders : cuid {
  comment : String;
  Items   : Composition of many {
              key pos      : Integer;
                  quantity : Integer;
                  books    : Association to Books;
            };
}
// entity OrderItems { // to be accessed through Orders only
//   key parent : Association to Orders;
//   key pos    : Integer;
//   quantity   : Integer;
// }
