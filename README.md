"What hash is it?" service allows you to identify the hashing functions used of your hash(es) based on their characteristics.
In few words, this is a Node.js application based on Hash-identifier project and I created a Web service using it. 

### Live demo

A live demo is available [here](http://what-hash-is-it.herokuapp.com) and is hosted thanks to [Heroku](https://heroku.com/).

### Are the hashes stored somewhere?

No, they are not stored in some database or something. 

### I want to run it locally!

To do so, clone the repository: 

```git clone https://github.com/PaulSec/WhatHashIsIt.git```

Then ```npm install```

And to finish :  ```node server.js```. 
The application (including the REST API) is accessible at: ```http://127.0.0.1:8080```. 

Then, 

### How can I interact with the REST API? 

The REST API is accessible at: ```http://ip:port/API/hash/<hash>```.
I did two samples for Bash scripting and Python. 

```sh
#!/bin/sh
curl 'http://127.0.0.1:8080/API/hash/098f6bcd4621d373cade4e832627b4f6'
```

And in Python:

```python
import requests
import json

req = requests.get('http://127.0.0.1:8080/API/hash/098f6bcd4621d373cade4e832627b4f6')
data = json.loads(req.content)
if (len(data) > 0):
    print data
else:
    print "[-] No result found for this hash."
```


### What are the functions supported?

You can find them in the folder ```lib/hashes/```. There's one separate .js file for each hashing function. 
So far, here is the list of the hashing functions supported: 

```
CRC16
CRC16CCITT
FCS16
CRC32
ADLER32
CRC32B
XOR32
GHash323
GHash325
DESUnix
MD5Half
MD5Middle
MySQL
DomainCachedCredentials
Haval128
Haval128HMAC
MD2
MD2HMAC
MD4
MD4HMAC
MD5
MD5HMAC
MD5HMACWordpress
NTLM
RAdminv2x
RipeMD128
RipeMD128HMAC
SNEFRU128
SNEFRU128HMAC
Tiger128
Tiger128HMAC
md5passsalt
md5saltmd5pass
md5saltpass
md5saltpasssalt
md5saltpassusername
md5saltmd5pass
md5saltmd5passsalt
md5saltmd5passsalt
md5saltmd5saltpass
md5saltmd5md5passsalt
md5username0pass
md5usernameLFpass
md5usernamemd5passsalt
md5md5pass
md5md5passsalt
md5md5passmd5salt
md5md5saltpass
md5md5saltmd5pass
md5md5usernamepasssalt
md5md5md5pass
md5md5md5md5pass
md5md5md5md5md5pass
md5sha1pass
md5sha1md5pass
md5sha1md5sha1pass
md5strtouppermd5pass
LineageIIC4
MD5phpBB3
MD5Unix
MD5Wordpress
MD5APR
Haval160
Haval160HMAC
MySQL5
MySQL160bit
RipeMD160
RipeMD160HMAC
SHA1
SHA1HMAC
SHA1MaNGOS
SHA1MaNGOS2
Tiger160
Tiger160HMAC
sha1passsalt
sha1saltpass
sha1saltmd5pass
sha1saltmd5passsalt
sha1saltsha1pass
sha1saltsha1saltsha1pass
sha1usernamepass
sha1usernamepasssalt
sha1md5pass
sha1md5passsalt
sha1md5sha1pass
sha1sha1pass
sha1sha1passsalt
sha1sha1passsubstrpass03
sha1sha1saltpass
sha1sha1sha1pass
sha1strtolowerusernamepass
Haval192
Haval192HMAC
Tiger192
Tiger192HMAC
MD5passsaltjoomla1
SHA1Django
Haval224
Haval224HMAC
SHA224
SHA224HMAC
SHA256
SHA256HMAC
Haval256
Haval256HMAC
GOSTR341194
RipeMD256
RipeMD256HMAC
SNEFRU256
SNEFRU256HMAC
SHA256md5pass
SHA256sha1pass
MD5passsaltjoomla2
SAM
SHA256Django
RipeMD320
RipeMD320HMAC
SHA384
SHA384HMAC
SHA256s
SHA384Django
SHA512
SHA512HMAC
Whirlpool
WhirlpoolHMAC
```

### How can I contribute to the project? 

There's a hashing function which is not (yet) in this project? 
Then, take one .js file as an example and do the same checks. Then, do a **Pull Request** and I'll accept it. 

### Want to contact me? 

There's my mail on my Github account page. 
Moreover, here is my Twitter handle: [@PaulWebSec](https://twitter.com/PaulWebSec). 

### License

This project has been released under MIT license. 
Feel free to clone/fork it.