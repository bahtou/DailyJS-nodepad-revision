[DailyJS](http://dailyjs.com/2010/11/01/node-tutorial/) has a tutorial on how to create a notepad web app: Nodepad.  
This is the initialization of a rewrite.

## Quick Notes #

Deviations from the tutorial:  


- DailyJS mongoose: 2.3.12 vs. 3.1.1  
  *2.3.12*  
><pre><code>
getters: {
      id: function() {
      return this._id.toHexString();
    },
setters: {
      password: function(password) {
      this._password = password;
      this.salt = this.makeSalt();
      this.hashed_password = this.encryptPassword(password);
    },
methods: {
      authenticate: function(plainText) {
      return this.encryptPassword(plainText) === this.hashed_password;
    },
    makeSalt: function() {
      return Math.round((new Date().valueOf() * Math.random())) + '';
    }}
</code></pre>    
  
 *3.1.1*
>see [virtuals and getter/setter](http://mongoosejs.com/docs/guide.html#virtuals), [id](http://mongoosejs.com/docs/guide.html#_id) and [methods](http://mongoosejs.com/docs/guide.html#methods)

