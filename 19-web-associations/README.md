# Sinatra Associations

### Learning Goals
- Associate records over HTTP using foreign keys
- Build a nested params hash with input names
- Use `select` and `checkbox`es to allow a user to associate two records



## Driver
|  ID    | Name     |      
| ---- | ---- | ---- |
|   2   |    Raul  |     

## DriveSessions

|  DriverID    |   CarID   |      
| ---- | ---- | ---- |
|   2   |    9  |    
|   2   |    10  |    

## Cars
|  id    |   Name   |      
| ---- | ---- | ---- |
|   9   |    Raptor  |     
|   10   |    Porsche  | 

### 


```
_method: patch
car[driver_ids][]: 3
car[driver_ids][]: 4
car[model]: Raptor
car[color]: #000000

{
    _method: "patch",
    car: {
        driver_ids:  [ 3, 4 ],
        model: 'Raptor',
        color: '#000000'
    }
}

