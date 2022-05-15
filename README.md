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

#### How to create a user ? / How can a user sign up ?
* Api for user registration is implemented
* However in front end there is not option to sign up at this moment
* You should use the given postman collection to sign up a new user

#### How can we add a currency ?
* Add a new currency with valid currency code in the currency table
* Make sure the _active_ column has value '1'
* Currency codes needs to be valid in order to get conversion rate correct

#### Currency converion public api's
These api's below can be used to get a real time conversion rate
* https://openexchangerates.org
* https://currencylayer.com
* http://fixer.io

We are using Open Exchange Rate, so make sure you put the **appId** for _openexchangerate_ in the ```.env``` file


#### Does this allow subfolder ?
Yes, it does run on a subfolder
in ```.env``` file if there is no subfolder , make sure the variables are like this

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


