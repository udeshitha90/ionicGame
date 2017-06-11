import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
import 'rxjs/add/operator/map';

/*
  Generated class for the UserDate provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserDate {
    
public sql: SQLiteObject;
public people: Array<Object>;

  constructor(private sqlite:SQLite) {
    console.log('Hello UserDate Provider');
  }
createDatabase(){
    this.sqlite.create({
    name:'data.db',
    location:'default' }).then((db:SQLiteObject)=>{
    this.sql=db;
     db.executeSql("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, password TEXT)", {})
    .then(()=>console.log('Executed SQL'))
    .catch(e=>console.log("Test"+e));
     }).catch(e=>console.log("Test:"+e));
    }

    public add(userDetails):any {
     return new Promise((resolve)=>  {
          this.sql.executeSql("INSERT INTO people (Name, password) VALUES ('"+userDetails.Name+"', '"+userDetails.Password+"')", []).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
            resolve("Data inserted")
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
            resolve(JSON.stringify(error.err))
        });
     });
    }

    public refresh():any {
        return new Promise((resolve)=>{
        this.sql.executeSql("SELECT * FROM people", []).then((data) => {
            this.people = [];
            if(data.rows.length > 0) {
                for(var i = 0; i < data.rows.length; i++) {
                    this.people.push({id:data.rows.item(i).id,
                         Name: data.rows.item(i).Name,
                         Password: data.rows.item(i).Password});
                }
            }
            resolve(this.people);
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
            resolve(JSON.stringify(error))
        });
        });
    }

    public getUserDetailsByNamePassword(userDetails):any{
        return new Promise((resolve)=>{
            this.sql.executeSql("SELECT * FROM people WHERE Name='"+userDetails.Name+"' and Password='"+userDetails.Password+"'",[])
            .then((data)=>{
               this.people = [];
            if(data.rows.length > 0) {
                for(var i = 0; i < data.rows.length; i++) {
                    this.people.push({id:data.rows.item(i).id,
                         Name: data.rows.item(i).Name,
                         Password: data.rows.item(i).Password,});
                }
                resolve(true);
            }else{
            resolve(false); 
            }
        },
        (error) => {
            console.log("ERROR: " + JSON.stringify(error));
            resolve(JSON.stringify(error))
        });
        });
    }
}
