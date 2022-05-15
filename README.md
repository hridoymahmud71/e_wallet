# e_wallet
 A project made with laravel and react js to create a Electronic Wallet System
### What does it implement ?
 It' ann implementation of electroinc wallet for multi currency transfer
## Stack
Laravel , ReactJs , Tailwind 



#### How to run
* Just run it like a laravel project by hitting url, not with serve 
* _ReactJs was integrated using laravel mixin, so you will not be able to run the frontend using serve_ 
* Import the e_wallet.sql file (If you do not want to run migration and want to start with existing dummy data)

#### How to create an admin ?
* You have to create the admin manually
* Make sure the role of the admin in _users_ table is "admin", also make sure the _email_verified_at_ is a proper timestamp and is not _null_  

#### How to create a customer ? / How can a customer sign up ?
* Api for customer registration is implemented
* However in front end there is not option to sign up at this moment
* You should use the given postman collection to sign up a new customer
 



#### Does this allow subfolder ?
Yes, it does run on a subfolder
in .env file if there is no subfolder , make sure the variables are like this

```
BASENAME="/"
MIX_ASSET_URL="/public"
```

if you have subfolder the variables should be like:

```
BASENAME="/[path/to/subfolder]"
MIX_ASSET_URL="/[path/to/subfolder]/public"
```

#### Postman collection link
```
https://www.getpostman.com/collections/2b510d4c291a25bf3831
```


