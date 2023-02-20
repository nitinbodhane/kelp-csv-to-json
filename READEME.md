##Kelp-csv-2-json

### Pre requisitePre requisite
- Nodejs version 18.14.1 LTS
- Docker desktop

#### Install the package dependency
Run `$ npm install`

####Start the application
 Run `$ docker-compose up`

####Stop the app
 Run `$ docker-compose down`

####Build the code,
 Run `$ docker-compose build`

 #####**Database**
>  Note: If users table missing in database, please run the below command in sql script to create the table.

If unable to hit the database via application, only run the database in docker and run the api server locally
Run `$ npm start`

**When you see the message in the console like "Server is running on port port 3000"**
####Visit [Home page](http://localhost:3000)

--------
####Hit the API CSV2Json converter API [Click Here](http://localhost:3000/convertCsvToJson?fileName=example)

**Example** is the name of the csv file available in the repo, you can add you file under csv folder and pass the name of the file as a query param of the API
** Note:** One can generate random data using below command
 Run node csv/userDataGenerator.js


 ####Javascript
 Expected output
 ```
 {
    "code": 200,
    "message": "CSV file records uploaded to database successfully",
    "data": [
        {
            "name": {
                "firstName": "Rohit",
                "lastName": "Prasad"
            },
            "age": "35",
            "address": {
                "line1": "A-563 Rakshak Society",
                "line2": "New Pune road",
                "city": "Pune",
                "state": "Maharashtra"
            },
            "gender": "Male",
            "phone": {
                "mobile": {
                    "number": "123823213"
                }
            }
        },
        {
            "name": {
                "firstName": "Nitin",
                "lastName": "Bodhane"
            },
            "age": "33",
            "address": {
                "line1": "Thane",
                "line2": "Thane",
                "city": "Thane",
                "state": "Maharashtra"
            },
            "gender": "Male",
            "phone": {
                "mobile": {
                    "number": "238743924"
                }
            }
        }
    ]
}
```
###Console output

Data inserted successfully

|  (index)    | age_group  | percent | count
| :------------ |:---------------:| -----:| -----:|
| 0      | '20 to 40' | 100.00' | '2' |



