using { db } from '../db/model';


service TRANS_SRV{
    entity PROJECT as projection on db.PROJECT;
    function Project_Fun(items:String) returns String;
}
