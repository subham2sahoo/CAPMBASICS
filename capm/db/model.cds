namespace db;
aspect  cuid{key ID:UUID;}

entity Books :cuid{
    TITLE  : String;
    author_foregin:type of Authors:ID;
    author:Association to Authors on author.ID = author_foregin;
}

entity Authors:cuid{
    NAME:String;
}