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


