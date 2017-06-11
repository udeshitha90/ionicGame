import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";

/*
  Generated class for the GameData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GameData {
public sql: SQLiteObject;
public ScoreTable: Array<Object>;
  constructor(public sqlite:SQLite) {
    console.log('Hello GameData Provider');
  }
   createDatabase(){
    this.sqlite.create({
    name:'data.db',
    location:'default' }).then((db:SQLiteObject)=>{
    this.sql=db;
     db.executeSql("CREATE TABLE IF NOT EXISTS Score (id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Min TEXT)", {})
    .then(()=>console.log('Executed SQL'))
    .catch(e=>console.log("Test"+e));
     }).catch(e=>console.log("Test:"+e));
    }

 public add(Score):any {
     return new Promise((resolve)=>  {
          this.sql.executeSql("INSERT INTO Score (Name, Min) VALUES ('"+Score.Name+"', '"+Score.Min+"')", []).then((data) => {
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
        this.sql.executeSql("SELECT * FROM Score", []).then((data) => {
            this.ScoreTable = [];
            if(data.rows.length > 0) {
                for(var i = 0; i < data.rows.length; i++) {
                    this.ScoreTable.push({id:data.rows.item(i).id,
                         Name: data.rows.item(i).Name,
                         Min: data.rows.item(i).Min});
                }
            }
            resolve(this.ScoreTable);
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
            resolve(JSON.stringify(error))
        });
        });
    }
}
