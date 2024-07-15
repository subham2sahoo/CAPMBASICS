namespace db;
aspect  cuid{key ID:UUID;}

entity Books :cuid{
    TITLE  : String;
    author_foregin:type of Authors:ID;
    author:Association to Authors on author.ID = author_foregin;
    also_Author:Association  to Authors;
}

// https://port4004-workspaces-ws-vzvpb.us10.trial.applicationstudio.cloud.sap/odata/v4/bookshop/books?$expand=author

entity Authors:cuid{
    NAME:String;
}